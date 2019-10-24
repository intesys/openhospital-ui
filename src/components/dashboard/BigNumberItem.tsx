import Grid from "@material-ui/core/Grid";
// material imports
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
// local imports
import styles from "./styles/BigNumberItem.style";
export interface Props extends WithStyles<typeof styles> {}

class BigNumberItem extends Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <Grid item={true} xs={12} sm={4}>
        <Grid item={true} xs={true}>
          <Typography className={classes.materialsListItemBigNumber} variant="inherit" align="center">
            8
          </Typography>
        </Grid>
        <Grid item={true} xs={true}>
          <Typography className={classes.materialsListItemBigNumberDesc} variant="inherit" align="center">
            <span className={classes.textDark}>Patients</span> visited
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(BigNumberItem);
export default styledComponent;
