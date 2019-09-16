import { Card, CardContent, Grid, Link, Paper, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import { Link as LinkRouter } from "react-router-dom";
import PdfIcon from "../utils/icons/svg/PdfIcon";
import styles from "./Pharmacy.style";
import MovementGraph from "../sharedComponents/MovementGraph";
import StockGraph from "../sharedComponents/StockGraph";
export interface IProps extends WithStyles<typeof styles> { }

interface IState {
  value?: number;
  labelWidth: number;
  error: any;
  isLoaded: boolean;
}

class Pharmacy extends React.Component<IProps, IState> {
  state: State = {
    labelWidth: 0,
    value: 0,
    error: null,
    isLoaded: false,
  };

  handleChange = (event: React.MouseEvent<HTMLElement>, value: number) => {
    this.setState({ value });
  };

  public render() {
    const { classes } = this.props;
    const { value } = this.state;

    function createStock(name: string, located: string, expiration: string, vials: string, refuelingTime: string) {
      return { name, located, expiration, vials, refuelingTime };
    }

    const rowsDataStock = [
      createStock("amoxicillina", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Claritromicina", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Omeprazole", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Naproxen", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Clonazepam", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Ibuprofen", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Amoxicillina antibiotic", "Room 2", "16.06.19", "79", "2 Weeks"),
      createStock("Amoxicillina antibiotic", "Room 2", "16.06.19", "79", "2 Weeks"),
    ];

    function createMovements(name: string, expiration: string, vials: string, costs: string) {
      return { name, expiration, vials, costs };
    }

    const rowsDataMovements = [
      createMovements("amoxicillina", "16.06.19", "79", "2,3$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "4.4$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "2,3$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "4.4$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "2,3$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "2,3$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "4.4$/unit"),
      createMovements("amoxicillina", "16.06.19", "79", "2,3$/unit"),
    ];

    return (
      <div className={classes.root}>
       
        <Grid container item className={classes.gridContainer} justify="center" spacing={24}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="Breadcrumb" className={classes.breadCrumb}>
              <Link color="secondary" component={LinkRouter} to="/dashboard">
                Home
              </Link>
              <Typography color="inherit">Pharmacy</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="inherit" className={classes.pharmacyTitle}>
              PHARMACY
            </Typography>
          </Grid>
          &emsp;
          <Divider className={classes.divider} />
          <Grid container item className={classes.gridContainer} spacing={24}>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="none"
                textColor="secondary"
                value={value}
                onChange={this.handleChange}
              >
                <Tab className={classes.pharmacyLink} label="Stock" />
                <Tab className={classes.pharmacyLink} label="Movements" />
              </Tabs>
            </Grid>
            <Grid container item className={classes.gridContainer} style={{ paddingLeft: "300px" }} xs={6}>
              <Button variant="outlined" color="inherit" classes={{ root: classes.button, label: classes.buttonLabel }}>
                Charge
              </Button>
              &emsp;
              <Button variant="outlined" color="inherit" classes={{ root: classes.button, label: classes.buttonLabel }}>
                Discharge
              </Button>
            </Grid>
            {value === 0 && (
              //STOCK TABLES//

              <div container item spacing={48}>
                <Grid container className={classes.gridContainerTable} justify="center">
                  <Grid item xs={6} className={classes.formatTable}>
                    <Paper className={classes.paperStock}>
                      <TableHead>
                        <TableRow className={classes.stockTableTitle}>
                          DRUGS OUT OF A STOCK
                        </TableRow>
                        <TableRow className={classes.stockTableSubtitle}>
                          NEXT REFUELING IN:
                        </TableRow>
                      </TableHead>
                      <Grid style={{ display: "flex" }}>
                        <StockGraph />
                      </Grid>
                      &nbsp;
                      <Button
                        variant="outlined"
                        color="inherit"
                        classes={{ root: classes.buttonInventory, label: classes.buttonLabelInventory }}
                      >
                        Make drug's inventory
                      </Button>
                    </Paper>
                  </Grid>
                  &nbsp;
                  <Grid item className={classes.formatTable} xs={12}>
                    <Paper className={classes.paperDetailsStock}>
                      <Grid item style={{paddingLeft:'10px'}} xs={6}>
                        <Typography variant="inherit" className={classes.findStock}>
                          Show
                        </Typography>
                        <Link className={classes.findStock} color="secondary" component={LinkRouter} to="/dashboard">
                          All drugs
                        </Link>
                        <Link className={classes.findStock} color="secondary" component={LinkRouter} to="/dashboard">
                          By type
                        </Link>
                      </Grid>

                      <Grid style={{ marginTop: -27, marginLeft: 500 }} container xs={5}>
                        <Typography variant="inherit" className={classes.findStockFilter}>
                          Filter
                        </Typography>
                        <Grid xs={6}>
                          <Select
                            variant="outlined"
                            className={classNames(classes.select, classes.formField)}
                            input={
                              <OutlinedInput
                                labelWidth={300}
                                name="filter"
                                id="filter"
                                classes={{
                                  input: classes.formFieldSelectInput,
                                }}
                              />
                            }
                          >
                            <MenuItem value={10}>Most Recent</MenuItem>
                            <MenuItem value={20}>Last Updated</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item xs={8}>
                          <TextField
                            placeholder="Search"
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
                            margin="normal"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid style={{ marginLeft: 555, marginBottom: 20, marginTop: -53 }} item xs={6}>
                          <Button
                            variant="outlined"
                            color="inherit"
                            classes={{ root: classes.button, label: classes.buttonLabel }}
                          >
                            Search
                          </Button>
                        </Grid>
                      </Grid>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">
                              Drug Name
                            </TableCell>
                            <TableCell align="left">
                              <b>Located</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Expiration Date</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>N°vials</b>
                            </TableCell>
                            <TableCell align="left">
                              <b>Refueling forecast</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody style={{ fontSize: "12px" }}>
                          {rowsDataStock.map(row => (
                            <TableRow key={row.name}>
                              <TableCell align="left" padding="none" font-size="12px">
                                {row.name}
                              </TableCell>
                              <TableCell align="left" padding="8px" font-size="12px">
                                {row.located}
                              </TableCell>
                              <TableCell align="left" padding="8px" font-size="12px">
                                {row.expiration}
                              </TableCell>
                              <TableCell align="left" padding="8px" font-size="12px">
                                {row.vials}
                              </TableCell>
                              <TableCell align="left" padding="8px" font-size="12px">
                                {row.refuelingTime}
                              </TableCell>
                              <TableCell padding="none">
                                <Button
                                  variant="outlined"
                                  color="inherit"
                                  classes={{ root: classes.buttonTable, label: classes.buttonLabelTable }}
                                >
                                  Stock
                                </Button>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="outlined"
                                  color="inherit"
                                  classes={{ root: classes.buttonTable, label: classes.buttonLabelTable }}
                                >
                                  Expiring
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  </Grid>
                  &nbsp;
                </Grid>
              </div>
            )}
            {value === 1 && (
              //MOVEMENTS TABLES//

              <div container item spacing={48}>
                <Grid container className={classes.gridContainerTable} justify="center">
                  <Grid item xs={12} className={classes.formatTable}>
                    <Paper className={classes.paperMovements}>
                      <TableHead>
                        <TableRow className={classes.movementsTableTitle}>
                          MOVEMENTS OF DRUGS
                        </TableRow>
                        <TableRow className={classes.movementsTableSubtitle}>
                          INBOUND DRUGS TODAY
                        </TableRow>
                      </TableHead>
                      <Grid style={{ display: "flex" }}>
                       <MovementGraph />
                      </Grid>
                      <Grid>
                        
                      </Grid>
                      &nbsp;
                    </Paper>
                  </Grid>
                  &nbsp;
                  <Grid item className={classes.formatTable} xs={12}>
                    <Paper className={classes.paperDetailsMovements}>
                      <Grid item xs={6}>
                        <Typography variant="inherit" className={classes.findStock}>
                          Show
                        </Typography>
                        <Link className={classes.findStock} color="secondary" component={LinkRouter} to="/">
                          Inbound drugs
                        </Link>
                        <Link className={classes.findStock} color="secondary" component={LinkRouter} to="/">
                          Outgoing drugs
                        </Link>
                        <Link className={classes.findStock} color="secondary" component={LinkRouter} to="/">
                          All
                        </Link>
                      </Grid>
                      <Grid style={{ marginTop: -27, marginLeft: 500 }} container item xs={5}>
                        <Typography variant="inherit" className={classes.findMovementsFilter}>
                          Filter
                        </Typography>
                        <Grid item xs={6}>
                          <Select
                            variant="outlined"
                            className={classNames(classes.select, classes.formField)}
                            input={
                              <OutlinedInput
                                labelWidth={300}
                                name="filter"
                                id="filter"
                                classes={{
                                  input: classes.formFieldSelectInput,
                                }}
                              />
                            }
                          >
                            <MenuItem value={10}>Most Recent</MenuItem>
                            <MenuItem value={20}>Last Updated</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item xs={6}>
                          <TextField
                            placeholder="Search"
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
                            margin="normal"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid style={{ marginLeft: 426, marginBottom: 20, marginTop: -53 }} item xs={6}>
                          <Button
                            variant="outlined"
                            color="inherit"
                            classes={{ root: classes.button, label: classes.buttonLabel }}
                          >
                            Search
                          </Button>
                        </Grid>
                      </Grid>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">
                              <b>Name of Drug</b>
                            </TableCell>
                            <TableCell align="center">
                              <b>Date of expiration</b>
                            </TableCell>
                            <TableCell align="center">
                              <b>Quantity of vials</b>
                            </TableCell>
                            <TableCell align="center">
                              <b>Costs</b>
                            </TableCell>
                            <TableCell align="center">
                              <b>Invoice</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody style={{ fontSize: "12px" }}>
                          {rowsDataMovements.map(row => (
                            <TableRow key={row.name}>
                              <TableCell align="center" font-size="12px">
                                {row.name}
                              </TableCell>
                              <TableCell align="center" font-size="12px">
                                {row.expiration}
                              </TableCell>
                              <TableCell align="center" font-size="12px">
                                {row.vials}
                              </TableCell>
                              <TableCell align="center" font-size="12px">
                                {row.costs}
                              </TableCell>
                              <TableCell align="center">
                                <SvgIcon component={PdfIcon} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Paper>
                  </Grid>
                  &nbsp;
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Pharmacy.PropTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles, { withTheme: true })(Pharmacy);
export default styledComponent;
