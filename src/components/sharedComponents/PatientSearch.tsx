import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/core/SvgIcon/SvgIcon";
import * as React from "react";
import { Component } from "react";
import { WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles/PatientSearch.style";

export interface Props extends WithStyles<typeof styles> {}

class PatientSearch extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container={true} item={true} justify="center" spacing={24}>
        <Paper className={classes.paperFlat}>
          <Grid container={true} item={true} spacing={24} className={classes.inputContainer}>
            <Grid item={true} xs={12} style={{ display: "flex" }}>
              <Typography variant="inherit" className={classes.findPatients}>
                FIND A PATIENT
              </Typography>
              <Typography variant="inherit" className={classes.insertInfoPatients}>
                Insert the information of the patient
              </Typography>
            </Grid>
          </Grid>
          <form>
            <Grid container={true} item={true} spacing={24}>
              <Grid item={true} xs={12} sm={3}>
                <TextField
                  id="patientID"
                  label="Patient ID (PID)"
                  type="text"
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
              <Grid item={true} xs={12} sm={3}>
                <TextField
                  id="outpatientNumber"
                  label="Outpatient Number (OPD)"
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
              <Grid item={true} xs={12} sm={3}>
                <TextField
                  id="inpatientNumber"
                  label="Inpatient Number (IPD)"
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
              <Grid item={true} xs={12} sm={3}>
                <TextField
                  id="keyword"
                  label="Keyword"
                  className={classNames(classes.formField, classes.cssOutlinedInput)}
                  placeholder="First name, last name, tax number..."
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
            </Grid>
            <Grid container={true} justify="flex-end" item={true} spacing={24}>
              <Grid item={true} xs={12} sm={9} />
            </Grid>
            &emsp;
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
          </form>
        </Paper>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientSearch);
export default styledComponent;