import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";

// local imports
import classNames from "classnames";
import { MaterialButtonRouter } from "../utils/LinkHelper";
import styles from "./styles/SummaryItem.style";

// material imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface Props extends WithStyles<typeof styles> {}

class SummaryItem extends Component<Props>{
	public render(){
		const { classes } = this.props;
		return(
			<Grid item={true} xs={2} style={{ padding: 5 }} className={classes.boxInfo}>
				<Card className={classNames(classes.boxItem)}>
					<CardContent style={{ width: "100%", paddingBottom: 5 }}>
						<Typography className={classes.numberOf}>5</Typography>
						<Typography className={classes.object}>VISITS</Typography>
						<Typography className={classes.subTitle}>Last visit: 16.03.2019</Typography>
						<MaterialButtonRouter
							style={{ marginTop: 10 }}
							component={LinkRouter}
							to="/"
							variant="outlined"
							color="inherit"
							className={classes.summaryButton}>
							Print patient visit history
						</MaterialButtonRouter>
					</CardContent>
				</Card>
			</Grid>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(SummaryItem);
export default styledComponent;