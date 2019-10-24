import React, { Component } from "react";

// local imports
import styles from "./styles/AppointmentsItem.style";

// material imports
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface Props extends WithStyles<typeof styles> {}

class AppointmentsItem extends Component<Props>{

	public render(){
		const { classes } = this.props;
		return(
			<ListItem disableGutters={true} className={classes.appointmentsListItem}>
				<Grid container={true} justify="center" spacing={24} className={classes.appointmentsListItemGrid}>
					<Grid item={true} xs={3} className={classes.materialsListItemTitleContainer}>
						<Typography className={classes.materialsListItemBigNumberDesc} variant="inherit">
							<b>7.00 am</b>
						</Typography>
					</Grid>
					<Grid item={true} xs={9} className={classes.materialsListItemTitleContainer}>
						<Typography className={classes.materialsListItemBigNumberDesc} variant="inherit">
							Daily brief with the staff
						</Typography>
					</Grid>
				</Grid>
				<ListItemSecondaryAction>
					<Checkbox
					className={classes.appointmentsListItemCheckbox}
					// onChange={this.handleToggle(value)}
					// checked={this.state.checked.indexOf(value) !== -1}
					/>
				</ListItemSecondaryAction>
			</ListItem>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(AppointmentsItem);
export default styledComponent;