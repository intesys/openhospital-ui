import { Collapse, FormControl, InputLabel, List, ListItem, ListItemSecondaryAction, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import { Patient }                                         from 'generate';
import _                                                   from "lodash";
import React                                               from "react";
import { Link, Link as LinkRouter, RouteComponentProps }   from "react-router-dom";
import { GetPatientUsingGETRequest, PatientControllerApi } from '../../generate/apis';
import Calendar                                            from "../../shared/lib/calendar/index";
import SummaryItem                                         from "../sharedComponents/SummaryItem";
import { MaterialButtonRouter, MaterialLinkRouter }        from "../utils/LinkHelper";
import styles                                              from "./styles/PatientDetails.style";
export interface Props extends WithStyles<typeof styles> { }


interface State {
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  item: Patient;
  openOptionalInfo: boolean;
 }

interface IRouteParams {
  id: string;
  
}

interface IProps extends RouteComponentProps<IRouteParams> { }

class PatientDetails extends React.Component<IProps> {


  public state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    item: {},
    openOptionalInfo: false,
  };



  public componentDidMount() {

    const patientController: PatientControllerApi = new PatientControllerApi();
    const requestParams: GetPatientUsingGETRequest = {
      code: Number(this.props.match.params.id)
    };

    patientController.getPatientUsingGET(requestParams)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result,

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




  public handleClickCollapseOptionalInfo = () => {
    this.setState(state => ({ openOptionalInfo: !state.openOptionalInfo }));
  };

  public render() {
    const { classes } = this.props;
    const { openOptionalInfo } = this.state;

    {
      openOptionalInfo ? <ExpandLess /> : <ExpandMore />;
    }

    return (
      <div className={classes.root}>
        <Grid container={true} className={classes.gridContainer} justify="center" spacing={24}>
          <Grid container={true} item={true} spacing={24}>
            <Grid item={true} xs={12}>
              <Breadcrumbs aria-label="Breadcrumb" className={classes.breadCrumb}>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/dashboard">
                  Home
                </MaterialLinkRouter>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/patientsDatabase">
                  <Typography color="inherit">Patient Database</Typography>
                </MaterialLinkRouter>
                <Typography color="inherit">Patient Details</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item={true} xs={12}>
              <Typography variant="inherit" className={classes.patientTitle}>
                PATIENT DETAILS
              </Typography>
            </Grid>
          </Grid>
          <Grid container={true} item={true} justify="center" spacing={24}>
            <Grid container={true} item={true} justify="center" spacing={24}>
              <Grid item={true} xs={12} sm={3} className={classes.sidebar}>
                <Avatar alt="Remy Sharp" src={""} className={classes.avatar}>
                  <AddPhotoIcon />
                </Avatar>
                <Typography color="inherit" className={classes.avatarTitle}>
                  HEALTH INFORMATION
                </Typography>
                <Typography color="inherit" className={classes.patientIdTitle}>
                  PATIENT ID
                </Typography>
                <Typography color="inherit" className={classes.patientIdNumber}>
                  {this.state.item.code}
                </Typography>
                <Typography color="inherit" className={classes.bloodGroup}>
                  Blood Group
                </Typography>
                <Typography contentEditable={true}  color="inherit" className={classes.bloodType}>
                  {this.state.item.bloodType}
                </Typography>
                <Typography color="inherit" className={classes.notes}>
                  Next Kin:
                </Typography>
                <Typography contentEditable={true} color="inherit" className={classes.notesDetails}>
                  {this.state.item.nextKin}
                </Typography>
                &emsp;
                <Typography color="inherit" className={classes.notes}>
                  Notes:
                </Typography>
                <Typography color="inherit" className={classes.notesDetails}>
                  Pneumonia and malnutrition
                </Typography>
                <Typography color="inherit" className={classes.notesDetails}>
                  Grasses, Gluten
                </Typography>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                <Typography contentEditable={true}  color="inherit" className={classes.admissionDate}>
                  Last Admission:&nbsp;<b>22.01.2019</b>
                </Typography>
                <Typography color="inherit" className={classes.reasonVisit}>
                  Reason for visit:
                </Typography>
                <Typography color="inherit" className={classes.reasonVisitType}>
                  {" "}
                  Pneumonia and malnutrition
                </Typography>
                <Typography color="inherit" className={classes.treatment}>
                  Treatment made:
                </Typography>
                <Typography color="inherit" className={classes.treatmentType}>
                  {" "}
                </Typography>
                <MaterialButtonRouter
                  style={{ marginTop: 30 }}
                  component={LinkRouter}
                  to="/"
                  variant="outlined"
                  color="inherit"
                  classes={classes.detailButtonLabelPrint}
                >
                  Print health information
                </MaterialButtonRouter>
               
              </Grid>
              <Grid item={true} xs={12} sm={9} className={classes.patientContent}>
                <Grid item={true} xs={12} className={classes.patientProfileHeader}>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <Typography contentEditable={true}  color="inherit" className={classes.patientName}>
                      {this.state.item.firstName} {this.state.item.secondName}
                    </Typography>
                    <Typography color="inherit" className={classes.patientAddress}>
                      Provenance:
                    </Typography>
                  </div>
                  <Typography  contentEditable={true}  color="inherit" className={classes.patientAddressType}>
                    <b>{this.state.item.address}</b>,&nbsp;<b>{this.state.item.city}</b>
                  </Typography>
                  <MaterialButtonRouter component={LinkRouter} to={"/PatientDatabase/PatientAdmission/"+  this.state.item.code} variant="outlined" color="inherit" classes={{ root: classes.admissionButton }}
                  >
                    New Admission
                  </MaterialButtonRouter>
                  <MaterialButtonRouter component={LinkRouter} to={"/PatientDatabase/PatientVisit/" +this.state.item.code} variant="outlined" color="inherit" classes={{ root: classes.visitButton }}>
                    New visit
                  </MaterialButtonRouter>
                </Grid>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                <Grid item={true} xs={12} className={classes.patientProfileHeader}>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <Typography color="inherit" className={classes.patientRecord}>
                      PATIENT RECORD
                    </Typography>
                  </div>
                  <Tooltip title="View Opd patient History" interactive={true}>
                    <MaterialButtonRouter component={LinkRouter} to={"/PatientDatabase/Opd/"+this.state.item.code} variant="outlined" color="inherit" classes={{ root: classes.opdButton }}>
                      OPD
                  </MaterialButtonRouter>
                  </Tooltip>
                  <Tooltip title="Add new patient's therapy" interactive={true}>
                    <MaterialButtonRouter component={LinkRouter} to={"/patientDatabase/PatientTherapy/"+this.state.item.code} variant="outlined" color="inherit" classes={{ root: classes.therapyButton }}>
                      Therapy
                  </MaterialButtonRouter>
                  </Tooltip>
                </Grid>
                &nbsp;
                <Grid container={true} justify="center" spacing={24}>
                  <Calendar
                    accentColor={"red"}
                    orientation={"flex-row"}
                    showHeader={true}
                    onDatePicked={(d: any) => {
                      { onclick = this.handleClickCollapseOptionalInfo, d }
                    }}
                  />
                  <Collapse in={openOptionalInfo} style={{ width: "100%" }} timeout="auto">
                    <Grid item={true} xs={12} justify="center">
                      <List classes={{ root: classes.appointments }}>
                        <ListItem disableGutters={true} className={classes.appointmentsTitleContainer}>
                          <Typography className={classes.appointmentsTitle} variant="inherit" align="left">
                            EVENTS
                    </Typography>
                        </ListItem>
                        {/* <Collapse in={openAppointments} timeout="auto" unmountOnExit> */}
                        <List disablePadding={true}>
                          <ListItem disableGutters={true} className={classes.appointmentsListItem}>
                            <Grid container={true} justify="center" spacing={24} className={classes.appointmentsListItemGrid}>
                              <Grid item={true} xs={3} className={classes.materialsListItemTitleContainer}>
                                <Typography className={classes.appointmentsListItemText} variant="inherit">
                                  <b>07.30 am</b>
                                </Typography>
                              </Grid>
                              <Grid item={true} xs={9} className={classes.materialsListItemTitleContainer}>
                                <Typography className={classes.appointmentsListItemText} variant="inherit">
                                  Blood exam
                          </Typography>
                              </Grid>
                            </Grid>
                          </ListItem>
                          <ListItem disableGutters={true} className={classes.appointmentsListItem}>
                            <Grid container={true} justify="center" spacing={24} className={classes.appointmentsListItemGrid}>
                              <Grid item={true} xs={3} className={classes.materialsListItemTitleContainer}>
                                <Typography className={classes.appointmentsListItemText} variant="inherit">
                                  <b>10.30 am</b>
                                </Typography>
                              </Grid>
                              <Grid item={true} xs={9} className={classes.materialsListItemTitleContainer}>
                                <Typography className={classes.appointmentsListItemText} variant="inherit">
                                  Pneumological visit with Dr.Mason
                          </Typography>
                              </Grid>
                            </Grid>
                          </ListItem>
                        </List>
                      </List>
                    </Grid>
                  </Collapse>
                </Grid>
                <Grid item={true} xs={12} spacing={24} style={{ marginTop: 50, marginBottom: 20 }} className={classes.detailButtonContainer}>
                  <MaterialButtonRouter
                    component={LinkRouter}
                    to="/Billing"
                    variant="contained"
                    color="secondary"
                    classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}
                  >
                    <KeyboardArrowRightIcon />
                    Pay the bill
                  </MaterialButtonRouter>
                  <MaterialButtonRouter
                    component={LinkRouter}
                    to="/PatientDatabase/PatientExamination"
                    variant="contained"
                    color="secondary"
                    classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}
                  >
                    <KeyboardArrowRightIcon />
                    Examination
                  </MaterialButtonRouter>
                  <MaterialButtonRouter
                    component={LinkRouter}
                    to= "/PatientDatabase/PatientVaccination"
                    variant="contained"
                    color="secondary"
                    classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}
                  >
                    <KeyboardArrowRightIcon />
                    Vaccination
                  </MaterialButtonRouter>
                </Grid>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                <Typography color="inherit" className={classes.patientSummary}>
                  PATIENT SUMMARY
                </Typography>
                &emsp;
                <Grid container={true} className={classes.patientSummaryCard} style={{ width: "120%" }}>
                    <SummaryItem/>
                    <SummaryItem/>
                    <SummaryItem/>
                    <SummaryItem/>
                    <SummaryItem/>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientDetails);
export default styledComponent;
