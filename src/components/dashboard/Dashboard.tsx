import React from "react";
import { Link as LinkRouter } from "react-router-dom";

// local imports
import BigSearchIcon from "../utils/icons/svg/BigSearchIcon";
import PlusIcon from "../utils/icons/svg/PlusIcon";
import { MaterialCardActionAreaRouter } from "../utils/LinkHelper";
import CalendarPanel from "./CalendarPanel";
import MaterialPanel from "./MaterialPanel";
import styles from "./styles/Dashboard.style";

// material imports
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

// constants
import { PATH_NEW_PATIENT, PATH_PATIENTS_DATABASE } from "../../helpers/constants";

export interface Props extends WithStyles<typeof styles> {}

class Dashboard extends React.Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24} classes={{ container: classes.gridContainer }}>
          <Grid container={true} justify="center" centerlassName={classes.gridPaddingBottom}>
            <Grid item={true} xs={4}>
              <Typography variant="inherit" align="center" className={classes.welcomeTitle}>
                Welcome <b>Mario Rossi</b>
              </Typography>
            </Grid>
          </Grid>
          &emsp;
          <Grid container={true} justify="center" spacing={24} className={classes.ctaGrid}>
            <Grid item={true} xs={12} sm={4}>
              <MaterialCardActionAreaRouter className={classes.ctaPatient} component={LinkRouter} to="/patientsDatabase/NewPatient">
                <SvgIcon component={PlusIcon} />
                <Typography className={classes.ctaPatientText} color="inherit" align="center">
                  <b>REGISTER NEW PATIENT</b>
                </Typography>
              </MaterialCardActionAreaRouter>
            </Grid>
            <Grid item={true} xs={12} sm={4}>
              <MaterialCardActionAreaRouter
                className={classes.ctaPatient}
                component={LinkRouter}
                to={PATH_PATIENTS_DATABASE}
              >
                <SvgIcon component={BigSearchIcon} />
                <Typography className={classes.ctaPatientText} color="inherit" align="center">
                  <b>SEARCH FOR PATIENTS</b>
                </Typography>
              </MaterialCardActionAreaRouter>
            </Grid>
          </Grid>
          <Grid container={true} justify="center" spacing={24} className={classes.gridMaterialsCalendar}>
            <MaterialPanel />
            <CalendarPanel />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(Dashboard);
export default styledComponent;
