import { Card, CardContent, Divider, Grid, Link, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { ROOT_PATH } from "../../App";
import OHlogo from "../../assets/images/open-hospital.png";
import styles from "./login.style";
import CountUp from 'react-countup';
export interface Props extends WithStyles<typeof styles> {}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  public handleChange(e) {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  public submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      // && this.controlFormData()
      // go to homepage
      window.localStorage.setItem("user", "true");
      window.location.pathname = `${ROOT_PATH}`;
    }
  }
  /*
   controlFormData() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!/^[A-Za-z0-9]\w{7,14}$/i.test(fields["password"])) {
      formIsValid = false;
      errors["password"] = "*Password must be more than 7 characters";
    }

   
    if (/^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "*Please insert a valid email address.";

    }

    this.setState({ errors: errors });
    return formIsValid;

  }
*/

  public validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    if (!fields.email) {
      formIsValid = false;
      errors.email = "*Please enter your email.";
    }

    if (!fields.password) {
      formIsValid = false;
      errors.password = "*Please enter your password.";
    }

    this.setState({ errors });
    return formIsValid;
  }

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container={true} className={classes.gridContainer} justify="center" spacing={24}>
          <Grid className={classes.loginContainer}>
            <Paper className={classNames(classes.paperFlat, classes.paper)}>
              <Grid container={true} className={classes.gridContainer} justify="center" spacing={24}>
                <img src={OHlogo} alt="Open Hospital" className={classes.logo} />
              </Grid>
              &emsp;
              <Grid container={true} className={classes.gridContainer} justify="center" spacing={24}>
                <form
                  style={{ width: 400 }}
                  method="post"
                  name="userRegistrationForm"
                  onSubmit={this.submituserRegistrationForm}
                >
                  <Grid className={classes.errorMsg}>
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      value={this.state.fields.email}
                      onChange={this.handleChange}
                      error={this.state.errors.email}
                      className={classNames(classes.formField, classes.cssOutlinedInput)}
                      InputLabelProps={{
                        classes: {
                          root: classes.formFieldInputLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.formFieldInput,
                          notchedOutline: classes.cssOutlinedInput,
                        },
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                    <div className={classes.errorMsg}>{this.state.errors.email}</div>
                  </Grid>
                  <Grid className={classes.errorMsg}>
                    <TextField
                      id="password"
                      label="Password"
                      type="Password"
                      name="password"
                      value={this.state.fields.password}
                      onChange={this.handleChange}
                      error={this.state.errors.password}
                      className={classNames(classes.formField, classes.cssOutlinedInput)}
                      InputLabelProps={{
                        classes: {
                          root: classes.formFieldInputLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.formFieldInput,
                          notchedOutline: classes.cssOutlinedInput,
                        },
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                    <div className={classes.errorMsg}>{this.state.errors.password}</div>
                  </Grid>
                </form>
                <Grid container={true} className={classes.forgotContainer} spacing={24}>
                  <Link component="button" className={classes.forgotLink}>
                    FORGOT PASSWORD?
                  </Link>
                </Grid>
                &nbsp;
                <Grid container={true} className={classes.gridButtonContainer} justify="center" spacing={24}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="inherit"
                    onClick={this.submituserRegistrationForm}
                    classes={{ root: classes.button, label: classes.buttonLabel }}
                  >
                    ENTER
                  </Button>
                </Grid>
                <Grid container={true} className={classes.notRegisterContainer} spacing={24}>
                  &emsp;
                  <Divider className={classes.divider} />
                </Grid>
                <Grid container={true} className={classes.notRegisterContainer} spacing={24}>
                  <Typography variant="inherit" className={classes.notRegisterLink}>
                    If you have not registered yet,&nbsp;
                  </Typography>
                  <Link component="button" className={classes.notRegisterLink}>
                    CLICK HERE
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container={true} className={classes.summaryContainer}>
            <Paper className={classNames(classes.summaryPaperFlat, classes.paper)}>
              &nbsp;
              <Typography variant="inherit" className={classes.inTitle}>
                INPATIENT DEPARTMENT
              </Typography>
              &nbsp;
              <Typography variant="inherit" className={classes.inSummary}>
                SUMMARY DATA
              </Typography>
              &nbsp;
              <Grid item={true} spacing={24}>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={50}
                        duration={3.00}
                        />
                    <Typography className={classes.subTitle}>PATIENTS</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                    <Typography className={classes.subTitleSpec}>(this month)</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <Typography className={classes.numberOf}> <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={50}
                        duration={3.00}
                    />%</Typography>
                    <Typography className={classes.subTitle}>BOR</Typography>
                    <Typography className={classes.subTitleSpec}>Bed Occupancy Rate</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0.0}
                        end={3.5}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>AVERAGE LOSS</Typography>
                    <Typography className={classes.subTitleSpec}>Length of stay</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <Typography className={classes.numberOf}> <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={68}
                        duration={3.00}
                    />%</Typography>
                    <Typography className={classes.subTitle}> TOTAL BOR</Typography>
                    <Typography className={classes.subTitleSpec}>Bed Occupancy Rate</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={5}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>AVERAGE LOSS</Typography>
                    <Typography className={classes.subTitleSpec}>Length of stay</Typography>
                  </CardContent>
                </Card>
              </Grid>
              &nbsp;
              <Divider className={classes.summaryDivider} />
              &emsp;
              <Typography variant="inherit" className={classes.inTitle}>
                OUTPATIENT DEPARTMENT
              </Typography>
              &nbsp;
              <Typography variant="inherit" className={classes.inSummary}>
                SUMMARY DATA
              </Typography>
              &nbsp;
              <Grid item={true} spacing={24}>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={35}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                    <Typography className={classes.subTitleSpec}>(this month)</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <Typography className={classes.numberOf}> <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={46}
                        duration={3.00}
                    />%</Typography>
                    <Typography className={classes.subTitle}>BOR</Typography>
                    <Typography className={classes.subTitleSpec}>Bed Occupancy Rate</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={25}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>PATIENTS ADMITTED</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={5}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>AVERAGE LOSS</Typography>
                    <Typography className={classes.subTitleSpec}>Length of stay</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <Typography className={classes.numberOf}> <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={68}
                        duration={3.00}
                    />%</Typography>
                    <Typography className={classes.subTitle}> TOTAL BOR</Typography>
                    <Typography className={classes.subTitleSpec}>Bed Occupancy Rate</Typography>
                  </CardContent>
                </Card>
                <Card className={classNames(classes.boxItem)}>
                  <CardContent style={{ paddingBottom: 0, padding: 0 }}>
                    <CountUp
                        className={classes.numberOf}
                        start={0}
                        end={7}
                        duration={3.00}
                    />
                    <Typography className={classes.subTitle}>AVERAGE LOSS</Typography>
                    <Typography className={classes.subTitleSpec}>Length of stay</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.PropTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles, { withTheme: true })(Login);
// const routedComponent = withRouter(styledComponent);
export default styledComponent;
