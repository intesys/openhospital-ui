import React, { Component } from "react";

// local imports
import classNames from "classnames";
import BigNumberItem from "./BigNumberItem";
import styles from "./styles/MaterialPanelItem.style";

// material imports
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export interface Props extends WithStyles<typeof styles> {}

class MaterialPanelItem extends Component<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <ListItem className={classes.materialsListItem}>
        <Grid container={true} justify="center" spacing={24}>
          <Grid item={true} xs={12} className={classes.materialsListItemTitleContainer}>
            <Typography className={classes.materialsListItemTitle} variant="inherit">
              Amoxicillina antibiotico
            </Typography>
            <Typography className={classes.materialsListItemTitleWarning} variant="inherit">
              {/* <SvgIcon component={AlertIcon} /> */}
              The drug is running out
            </Typography>
          </Grid>
          <BigNumberItem />
          <BigNumberItem />
          <Grid item={true} xs={12} sm={4} classes={{ item: classes.detailButtonContainer }}>
            <Button
              variant="outlined"
              color="inherit"
              classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
            >
              Go to details
              <KeyboardArrowRightIcon />
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(MaterialPanelItem);
export default styledComponent;
