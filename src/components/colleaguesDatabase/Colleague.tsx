import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link as LinkRouter } from "react-router-dom";
import { MaterialCardActionAreaRouter } from "../utils/LinkHelper";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import {Patient} from "../../generate/models";
import styles from "./ColleaguesDatabase.style";
export interface Props extends WithStyles<typeof styles> {}

interface State {
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  items: Patient;
}

class Colleague extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    items: {},
  };

  render() {
    // debugger;
    let classes = this.props.classes;
    const {items} = this.state;
    let colleagueInfo = this.props.info;
    colleagueInfo.nickname =
      colleagueInfo.name.substring(0, 1).toLowerCase() + "." + colleagueInfo.surname.toLowerCase();

    const item = (
      <Grid item xs={12} sm={4}>
        <Paper className={classNames(classes.paper)}>
          <MaterialCardActionAreaRouter
            className={classes.cardAction}
            component={LinkRouter}
            to="/colleagues/colleagueDetails"
          >
            <Grid container className={classes.colleagueContainer} justify="center" spacing={24}>
              <Grid item xs={12}>
                <Avatar alt="Remy Sharp" src={colleagueInfo.photo} className={classes.avatar} />
              </Grid>
              <Grid item xs={12}>
                <Typography color="inherit">
                  {colleagueInfo.name} {colleagueInfo.surname}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="inherit">{colleagueInfo.nickname}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="inherit">Profession: Pneumologist</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="secondary">{colleagueInfo.phone}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="secondary">{colleagueInfo.email}</Typography>
              </Grid>
            </Grid>
          </MaterialCardActionAreaRouter>
          <Grid container item className={classes.colleagueContainer} justify="center" spacing={24}>
            <Grid item xs={12}>
              <Typography color="inherit">LAST PATIENTS VISITED</Typography>
            </Grid>
            <Grid container item className={classes.colleagueContainer} justify="center" spacing={24}>
              <Grid item xs={6} style={{ display: "flex" }}>
                <MaterialCardActionAreaRouter
                    className={classes.cardActionVisited}
                    component={LinkRouter}
                    to="/patientsdatabase/:patientID">
                <Avatar
                  alt="Remy Sharp"
                  src={colleagueInfo.photo}
                  className={classNames(classes.avatar, "avatarSmall")}
                />
                <div>
                  <Typography color="inherit">Gross</Typography>
                  <Typography color="inherit">Marcus</Typography>
                </div>
                </MaterialCardActionAreaRouter>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <MaterialCardActionAreaRouter
                    className={classes.cardActionVisited}
                    component={LinkRouter}
                    to="/patients-database/:patientId">
                  <Avatar
                      alt="Remy Sharp"
                      src={colleagueInfo.photo}
                      className={classNames(classes.avatar, "avatarSmall")}
                  />
                  <div>
                    <Typography color="inherit">Gross</Typography>
                    <Typography color="inherit">Marcus</Typography>
                  </div>
                </MaterialCardActionAreaRouter>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <MaterialCardActionAreaRouter
                    className={classes.cardActionVisited}
                    component={LinkRouter}
                    to="/patients-database/:patientId">
                  <Avatar
                      alt="Remy Sharp"
                      src={colleagueInfo.photo}
                      className={classNames(classes.avatar, "avatarSmall")}
                  />
                  <div >
                    <Typography color="inherit">Gross</Typography>
                    <Typography color="inherit">Marcus</Typography>
                  </div>
                </MaterialCardActionAreaRouter>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <MaterialCardActionAreaRouter
                    className={classes.cardActionVisited}
                    component={LinkRouter}
                    to="/patients-database/:patientId">
                  <Avatar
                      alt="Remy Sharp"
                      src={colleagueInfo.photo}
                      className={classNames(classes.avatar, "avatarSmall")}
                  />
                  <div >
                    <Typography color="inherit">Gross</Typography>
                    <Typography color="inherit">Marcus</Typography>
                  </div>
                </MaterialCardActionAreaRouter>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );

    return item;
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(Colleague);
export default styledComponent;
