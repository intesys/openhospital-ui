import React, { Component } from "react";

// local imports
import Calendar from "../../shared/lib/calendar/index";
import AppointmentsItem from "../sharedComponents/AppointmentsItem";
import ListHeader from "../sharedComponents/ListHeader";
import BigNumberItem from "./BigNumberItem";
import styles from "./styles/CalendarPanel.style";

// material imports
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export interface Props extends WithStyles<typeof styles> {}

class CalendarPanel extends Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <Grid item={true} xs={12} sm={6}>
        <Typography className={classes.cardTitle} variant="inherit" align="left">
          CALENDAR
        </Typography>
        <Paper className={classes.paperCalendar}>
          {/* xs=6 sm=3 */}
          <Calendar
            className={classes.calendar}
            accentColor={"red"}
            orientation={"flex-row"}
            showHeader={true}
            onDatePicked={(d: any) => {
              console.log("onDatePicked", d);
            }}
          />
          <Grid item={true} xs={12} justify="center" classes={{ item: classes.detailButtonContainer }}>
            <Button
              variant="outlined"
              color="inherit"
              classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
            >
              Add an event
              <KeyboardArrowRightIcon />
            </Button>
          </Grid>
          <List classes={{ root: classes.appointments }}>
            <ListHeader />
            {/* <Collapse in={openAppointments} timeout="auto" unmountOnExit> */}
            <List disablePadding={true}>
              <AppointmentsItem />
              <AppointmentsItem />
              <AppointmentsItem />
            </List>
            {/* </Collapse> */}
          </List>
          <List classes={{ root: classes.summary }}>
            <ListHeader />
            <ListItem className={classes.summaryItem}>
              <Grid container={true} justify="center" spacing={24}>
                <BigNumberItem />
                <BigNumberItem />
                <BigNumberItem />
              </Grid>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(CalendarPanel);
export default styledComponent;
