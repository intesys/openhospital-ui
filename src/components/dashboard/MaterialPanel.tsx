import React, { Component } from "react";

// local imports
import classNames from "classnames";
import MaterialPanelItem from "./MaterialPanelItem";
import styles from "./styles/MaterialPanel.style";

// material imports
import Button                     from "@material-ui/core/Button";
import Grid                       from "@material-ui/core/Grid";
import List                       from "@material-ui/core/List";
import ListItem                   from "@material-ui/core/ListItem";
import Paper                      from "@material-ui/core/Paper";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tab                        from "@material-ui/core/Tab";
import TabContainer               from "@material-ui/core/Tab";
import Tabs                       from "@material-ui/core/Tabs";
import Typography                 from "@material-ui/core/Typography";
import {Link as LinkRouter}       from "react-router-dom";
import {MaterialLinkRouter}       from "../utils/LinkHelper";

export interface Props extends WithStyles<typeof styles> {}

interface IState {
  value?: number;
  labelWidth: number;
  error: any;
  isLoaded: boolean;
}

class MaterialPanel extends Component<Props, IState> {
  public state: State = {
    labelWidth: 0,
    value: 0,
    error: null,
    isLoaded: false,
  };

  public handleChange = (event: React.MouseEvent<HTMLElement>, value: number) => {
    this.setState({ value });
  };



  public render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Grid item={true} xs={12} sm={6}>
        <Typography className={classes.cardTitle} variant="inherit" align="left">
          MATERIALS
        </Typography>
        <Paper className={classNames(classes.paper, classes.cardMaterials)}>
          <Tabs className={classes.tabs} variant="fullWidth" value={value} onChange={this.handleChange}>
            <Tab
              className={classNames(classes.tab, classes.tabRadiusSx)}
              classes={{ selected: classes.tabSelected }}
              label="Running out drugs"
            />
            <Tab
              className={classNames(classes.tab, classes.tabRadiusSx)}
              classes={{ selected: classes.tabSelected }}
              label="Running out nursing material"
            />
          </Tabs>
          {value === 0 && (
            <div>
              <List classes={{ root: classes.materialsList }}>
                <MaterialPanelItem />
                <MaterialPanelItem />
                <MaterialPanelItem />

                <ListItem button={true} classes={{ button: classes.allMaterialsButton }} component={LinkRouter} to="/pharmacy">
                  SEE ALL MATERIALS
                </ListItem>
              </List>
            </div>
          )}
          {value === 1 && (
            <div>
              <List classes={{ root: classes.materialsList }}>
                <MaterialPanelItem />
                <ListItem button={true} classes={{ button: classes.allMaterialsButton }} component={LinkRouter} to="/pharmacy">
                    SEE ALL MATERIALS
                </ListItem>
              </List>
            </div>
          )}
        </Paper>
      </Grid>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(MaterialPanel);
export default styledComponent;
