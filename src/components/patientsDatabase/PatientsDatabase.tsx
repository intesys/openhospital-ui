import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import classNames from 'classnames';
import { Patient } from 'generate';
import DeletePatient from './DeletePatient';
import * as React from "react";
import { Link as LinkRouter } from 'react-router-dom';
import { GetPatientsUsingGETRequest, PatientControllerApi } from '../../generate/apis';
import { MaterialButtonRouter, MaterialLinkRouter } from '../utils/LinkHelper';
import Patients from "./PatientsListItem";
import styles from './styles/PatientsDatabase.style';

// constants
import {PATH_NEW_PATIENT} from "../../config/constants";
export interface Props extends WithStyles<typeof styles> { }

interface State {
  error: any;
  isLoaded: boolean;
  items: any[];
  selectedDate: any;
  patients: Patient[];
  visible: Number;
  searchedValue: String;
  isDeleteDialogOpen: boolean;
}

class PatientsDatabase extends React.Component<Props, State> {


  public state: State = {
    error: null,
    isLoaded: false,
    items: [],
    selectedDate: new Date(),
    isDeleteDialogOpen: false,
  };


  public componentDidMount() {

    const patientController: PatientControllerApi = new PatientControllerApi();
    const requestParams: GetPatientsUsingGETRequest = {
      page: 1,
      size: 8,
    };

    patientController.getPatientsUsingGET(requestParams)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,

          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }



  public render() {
    const { classes, theme } = this.props;
    const { items, isLoaded, error } = this.state;
    const { isDeleteDialogOpen } = this.state;

    const patients = (
      items && items.length !== 0 ?
        (items.map((item) => (
          <Patients
            info={item}
          />
        ))) :
        <CircularProgress className={classes.progress} color="secondary" style={{ margin: '20px auto' }} />
    );

    return (
      <div className={classes.root}>
        <Grid container={true} className={classes.gridContainer} justify='center' spacing={24}>
          <Grid container={true} item={true} justify='center' spacing={24}>
            <Grid item={true} xs={12}>
              <Breadcrumbs aria-label="Breadcrumb" className={classes.breadCrumb}>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/dashboard">
                  Home
              </MaterialLinkRouter>
                <Typography color="inherit">Patients</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item={true} xs={12} className={classes.patientActions}>
              <Typography variant="inherit" className={classes.patientsTitle}>
                PATIENTS
              </Typography>
              <Button color="inherit" onClick={() => this.setState({ isDeleteDialogOpen: true })}
                      classes={{ root: classes.button, label: classes.buttonLabel }}>
                <CancelIcon className={classes.buttonIcon} />
                Delete a patient
              </Button>
              <DeletePatient
                  isOpen={isDeleteDialogOpen}
                  handleClickClose={() => this.setState({ isDeleteDialogOpen: false })} />
              <MaterialButtonRouter component={LinkRouter} to={PATH_NEW_PATIENT} color="inherit"
                                    classes={{ root: (classNames(classes.button, 'addButton')), label: classes.buttonLabel }}>
                <AddIcon className={classes.buttonIcon} />
                Record new patient
              </MaterialButtonRouter>
            </Grid>
          </Grid>
          <Grid container={true} item={true} justify='center' spacing={24}>
            <Paper className={classes.paperFlat}>
              <Grid container={true} item={true} spacing={24} className={classes.inputContainer}>
                <Grid item={true} xs={12} style={{ display: 'flex' }}>
                  <Typography variant="inherit" className={classes.findPatients}>
                    FIND A PATIENT
                </Typography>
                  <Typography variant="inherit" className={classes.insertInfoPatients}>
                    Insert the information of the patient
                </Typography>
                </Grid>
              </Grid>
              <form>
                <Grid container={true} item={true} spacing={24}>
                  <Grid item={true} xs={12} sm={3}>
                    <TextField
                      id="patientID"
                      label="Patient ID (PID)"
                      type="text"
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <TextField
                      id="outpatientNumber"
                      label="Outpatient Number (OPD)"
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <TextField
                      id="inpatientNumber"
                      label="Inpatient Number (IPD)"
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <TextField
                      id="keyword"
                      label="Keyword"
                      className={classNames(classes.formField, classes.cssOutlinedInput)}
                      placeholder="First name, last name, tax number..."
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
                      // value="{this.state.name}"
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container={true} justify="flex-end" item={true} spacing={24}>
                  <Grid item={true} xs={12} sm={9} />
                </Grid>
                &emsp;
                <Grid item xs={12} sm={2} classes={{ item: classes.detailButtonContainer }}>
                  <Button
                      variant="outlined"
                      color="inherit"
                      classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
                  >
                    Search
                    <KeyboardArrowRightIcon />
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid container={true} item={true} spacing={24} className={classes.filterContainer}>
            <Grid item={true} xs={12} style={{ display: 'flex' }}>
              <Typography variant="inherit" className={classes.findPatients}>
                Which patient are you searching for?
                </Typography>
              <Typography variant="inherit" className={classes.insertInfoPatients}>
                Use the filter for a faster search
                </Typography>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item={true} xs={12} sm={3}>
              <FormControl variant="outlined"
                className={classNames(classes.formField, classes.formFieldSelect)}>
                <Select
                  className={classes.select}
                  // value={this.state.age}
                  // onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      placeholder="soma"
                      labelWidth={300} // {this.state.InputLabelRef}
                      name="filter"
                      id="filter"
                      enableSearch={true}
                      // inputProps={{                          
                      classes={{
                        // root: classes.formFieldSelectInput,
                        input: classes.formFieldSelectInput
                      }}
                    // }}
                    />
                  }
                >
                  <MenuItem value={10}>Chronic Patient</MenuItem>
                  <MenuItem value={20}>Properly admission</MenuItem>
                  <MenuItem value={30}>Visited this month</MenuItem>
                  <MenuItem value={30}>Visited last month</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
          <Grid container={true} item={true} style={{ padding: '47px 0' }} spacing={24}>
            {patients}
          </Grid>
          <Grid item={true} xs={12} sm={2} className={classes.loadMoreContainer}>
            <Button type="button" variant="outlined" color="inherit" classes={{ root: classes.button, label: classes.buttonLabel }}>
              Load more
            </Button>
          </Grid>
        </Grid>
      </div >
    );
  }
}


const styledComponent = withStyles(styles, { withTheme: true })(PatientsDatabase);
export default styledComponent;
