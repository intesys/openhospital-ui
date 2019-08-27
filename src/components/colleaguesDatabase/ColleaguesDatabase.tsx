import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import classNames from "classnames";
import * as React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { MaterialLinkRouter } from "../utils/LinkHelper";
import Colleague from "./Colleague";

import styles from "./ColleaguesDatabase.style";
export interface IProps extends WithStyles<typeof styles> {}

interface IState {
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  items: any;
}

class ColleaguesDatabase extends React.Component<IProps, IState> {
  // tslint:disable-next-line: member-access
  state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext&amount=9")
      .then(res => res.json())
      .then(
        result => {
          setTimeout(() => {
            this.setState({
              isLoaded: true,
              items: result,
            });
          }, 300);
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

   /* this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    }); */
  }

  public render() {
    const { classes } = this.props;
    const { items } = this.state;

    const colleagues =
      items && items.length !== 0 ? (
        items.map((item: any) => (
          <Colleague
            info={item}
            // surname={item.surname}
          />
        ))
      ) : (
        <CircularProgress className={classes.progress} color="secondary" style={{ margin: "20px auto" }} />
      );

    return (
      <div className={classes.root}>
        <Grid container className={classes.gridContainer} justify="center" spacing={24}>
          <Grid container item justify="center" spacing={24}>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="Breadcrumb" className={classes.breadCrumb}>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/dashboard">
                  Home
                </MaterialLinkRouter>
                <Typography color="inherit">Colleagues</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="inherit" className={classes.colleaguesTitle}>
                COLLEAGUES
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justify="center" spacing={24}>
            <Paper className={classes.paperFlat}>
              <Grid container item spacing={24}>
                <Grid item xs={12} className={classes.inputContainer}>
                  <Typography variant="inherit" className={classes.findColleagues}>
                    FIND A COLLEAGUES
                  </Typography>
                  <Typography variant="inherit" className={classes.insertInfoColleagues}>
                    Insert the information of your colleagues
                  </Typography>
                </Grid>
              </Grid>
              <form>
                <Grid container item spacing={24}>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      id="name"
                      label="Name or Username*"
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      id="surname"
                      label="Surname"
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" className={classNames(classes.formField, classes.formFieldSelect)}>
                      <InputLabel
                        ref={ref => {
                          this.InputLabelRef = ref;
                        }}
                        htmlFor="​profession"
                        classes={{
                          root: classes.formFieldInputLabel,
                          focused: classes.selectLabel,
                        }}
                      >
                        Profession / Specialization / Usergroup
                      </InputLabel>
                      <Select
                        className={classes.select}
                        // value={this.state.age}
                        // onChange={this.handleChange}
                        input={
                          <OutlinedInput
                            labelWidth={this.state.InputLabelRef}
                            name="​professionSpecializationUsergroup"
                            id="profession"
                            // inputProps={{
                            classes={{
                              // root: classes.formFieldSelectInput,
                              input: classes.formFieldSelectInput,
                            }}
                            // }}
                          />
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={2} classes={{ item: classes.detailButtonContainer }}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
                    >
                      Search
                      <KeyboardArrowRightIcon />
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid container item style={{ padding: "47px 0" }} spacing={24}>
            {colleagues}
          </Grid>
          <Grid item xs={12} sm={2} classes={{ item: classes.detailButtonContainer }}>
            <Button
              variant="outlined"
              color="inherit"
              classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(ColleaguesDatabase);
export default styledComponent;
