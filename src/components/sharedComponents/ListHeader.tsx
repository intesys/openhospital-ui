import React, { Component } from "react";

// local imports
import styles from "./styles/ListHeader.style";

// material imports
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface Props extends WithStyles<typeof styles> {}

interface State {
	anchorEl?: any;
}

class ListHeader extends Component<Props, State>{
	public state: State = {
		anchorEl: null,
	};

	public handleClickCalendarAppointmentsDWM = (event: any) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	public handleCloseCalendarAppointmentsDWM = () => {
		this.setState({ anchorEl: null });
	};

	public render(){
		const { classes } = this.props;
		const { anchorEl } = this.state;
		return(
			<ListItem disableGutters={true} className={classes.appointmentsTitleContainer}>
				<Typography className={classes.appointmentsTitle} variant="inherit" align="left">
					SUMMARY
				</Typography>
				<Button
					aria-owns={anchorEl ? "simple-menu" : undefined}
					aria-haspopup="true"
					className={classes.appointmentsDWM}
					onClick={this.handleClickCalendarAppointmentsDWM}>
					Day
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleCloseCalendarAppointmentsDWM}>
					<MenuItem onClick={this.handleCloseCalendarAppointmentsDWM}>Day</MenuItem>
					<MenuItem onClick={this.handleCloseCalendarAppointmentsDWM}>Week</MenuItem>
					<MenuItem onClick={this.handleCloseCalendarAppointmentsDWM}>Month</MenuItem>
				</Menu>
			</ListItem>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(ListHeader);
export default styledComponent;