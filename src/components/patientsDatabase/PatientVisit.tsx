import { FormControlLabel } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import classNames from "classnames";
import { Patient } from "generate";
import _ from "lodash";
import * as React from "react";
import { Link as LinkRouter, RouteComponentProps } from "react-router-dom";
import { GetPatientUsingGETRequest, PatientControllerApi } from "../../generate/apis";
import { MaterialButtonRouter, MaterialLinkRouter } from "../utils/LinkHelper";
import styles from "./styles/PatientVisit.style";
export interface Props extends WithStyles<typeof styles> {}

interface State {
  InputLabelRef: number;
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  item: Patient;
  anchorEl?: any;
  openOptionalInfo: boolean;
}

interface IRouteParams {
  id: string;
}

interface IProps extends RouteComponentProps<IRouteParams> {}

class PatientVisit extends React.Component<IProps, State> {
  public state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    item: {},
    openOptionalInfo: false,
    anchorEl: null,
  };

  public componentDidMount() {
    const patientController: PatientControllerApi = new PatientControllerApi();
    const requestParams: GetPatientUsingGETRequest = {
      code: Number(this.props.match.params.id),
    };

    patientController.getPatientUsingGET(requestParams).then(
      result => {
        this.setState({
          isLoaded: true,
          item: result,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
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
                  <Typography color="inherit">Home</Typography>
                </MaterialLinkRouter>
                <MaterialLinkRouter color="secondary" component={LinkRouter} to="/patientsDatabase">
                  <Typography color="inherit">Patient Database</Typography>
                </MaterialLinkRouter>
                <Typography color="inherit">Patient Visit</Typography>
              </Breadcrumbs>
            </Grid>

            <Grid item={true} xs={12}>
              <Typography variant="inherit" className={classes.patientTitle}>
                PATIENT VISIT
              </Typography>
            </Grid>
          </Grid>
          &emsp;
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
                <Typography color="inherit" className={classes.opdTitle}>
                  OPD
                </Typography>
                <Typography color="inherit" className={classes.opdNumber}>
                  8937821
                </Typography>
                <Typography color="inherit" className={classes.bloodGroup}>
                  Blood Group
                </Typography>
                <Typography color="inherit" className={classes.bloodType}>
                  {this.state.item.bloodType}
                </Typography>
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
                <Typography color="inherit" className={classes.admissionDate}>
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
                  Pneumonia and malnutrition
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
              <Grid item={true} xs={12} sm={9} className={classes.colleagueContent}>
                <Grid item={true} xs={12} className={classes.colleagueProfileHeader}>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <Typography color="inherit" className={classes.patientName}>
                      {this.state.item.firstName} {this.state.item.secondName}
                    </Typography>
                    <Typography color="inherit" className={classes.patientAddress}>
                      Provenance:{" "}
                      <b>
                        {this.state.item.address},{this.state.item.city}
                      </b>
                    </Typography>
                  </div>
                </Grid>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                <Grid item={true} xs={12} className={classes.colleagueProfileHeader}>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <Typography color="inherit" className={classes.completeForm}>
                      COMPLETE THE FORM
                    </Typography>
                  </div>
                  <Grid style={{ marginLeft: 400 }}>
                    <Typography variant="inherit" className={classes.dateTitle}>
                      DATE
                    </Typography>
                  </Grid>
                  <Grid style={{ marginLeft: 10 }}>
                    &nbsp;
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                &emsp;
                <Grid item={true} xs={12} sm={12}>
                  <TextField
                    id="reason for visit"
                    label="Reason for visit"
                    className={classNames(classes.formField, classes.cssOutlinedInput)}
                    InputLabelProps={{
                      classes: {
                        root: classes.formFieldInputLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.formFieldInputNotes,
                        notchedOutline: classes.cssOutlinedInput,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Button
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  color="secondary"
                  classes={{ root: classes.detailButton, label: classes.detailButtonLabel }}
                >
                  BROWSE THE ICD 10
                </Button>
                &emsp;
                <Grid item={true} style={{ marginTop: 30 }} xs={12} sm={12}>
                  <TextField
                    id="Diagnosis"
                    label="Diagnosis"
                    className={classNames(classes.formField, classes.cssOutlinedInput)}
                    InputLabelProps={{
                      classes: {
                        root: classes.formFieldInputLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.formFieldInputNotes,
                        notchedOutline: classes.cssOutlinedInput,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item={true} style={{ marginTop: 30 }} xs={12} sm={12}>
                  <Grid xs={3} sm={3}>
                    <Typography color="inherit" className={classes.drugPrescribed}>
                      DRUGS PRESCRIBED
                    </Typography>
                  </Grid>
                  <Tooltip title="Add new patient's therapy" interactive={true} placement="top">
                    <MaterialButtonRouter
                      component={LinkRouter}
                      to={"/patientDatabase/PatientTherapy/" + this.state.item.code}
                      variant="outlined"
                      color="inherit"
                      classes={{ root: classes.detailButtonTherapy, label: classes.detailButtonLabel }}
                    >
                      THERAPY
                    </MaterialButtonRouter>
                  </Tooltip>
                  <TextField
                    id="Drugs prescribed"
                    placeholder="Describe here which kind of drugs are needed. Please remind to write the quantity."
                    className={classNames(classes.formField, classes.cssOutlinedInput)}
                    InputLabelProps={{
                      classes: {
                        root: classes.formFieldInputLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.formFieldInputNotes,
                        notchedOutline: classes.cssOutlinedInput,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                &emsp;
                <Grid item={true} style={{ marginTop: 30 }} xs={12} sm={12}>
                  <Typography color="inherit" className={classes.drugPrescribed}>
                    NOTES
                  </Typography>
                  <TextField
                    id="Notes"
                    className={classNames(classes.formField, classes.cssOutlinedInput)}
                    InputLabelProps={{
                      classes: {
                        root: classes.formFieldInputLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.formFieldInputNotes,
                        notchedOutline: classes.cssOutlinedInput,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item={true} style={{ marginTop: 30 }} xs={12} sm={12}>
                  <Typography color="inherit" className={classes.drugPrescribed}>
                    Prescribe laboratory tests
                  </Typography>
                  &nbsp;
                  <FormControlLabel
                    control={<Checkbox onClick={this.handleClickCollapseOptionalInfo} />}
                    label="Yes. it's necessary"
                  />
                  <FormControlLabel control={<Checkbox />} label="No, it isn't necessary" />
                  <Collapse in={openOptionalInfo} style={{ width: "100%" }} timeout="auto" unmountOnExit={true}>
                    <Grid item={true} xs={12} sm={8}>
                      <FormControl
                        variant="outlined"
                        className={classNames(classes.formField, classes.formFieldSelectService)}
                      >
                        <InputLabel
                          ref={ref => {
                            this.InputLabelRef = ref;
                          }}
                          htmlFor="Service type"
                          classes={{
                            root: classes.formFieldInputLabel,
                            focused: classes.selectLabel,
                          }}
                        >
                          Select one or more laboratory test
                        </InputLabel>
                        <Select
                          className={classes.select}
                          input={
                            <OutlinedInput
                              labelWidth={this.state.InputLabelRef}
                              id="Service type"
                              classes={{
                                input: classes.formFieldSelectInput,
                              }}
                            />
                          }
                        >
                          <MenuItem value={10}>item1</MenuItem>
                          <MenuItem value={20}>Laboratory </MenuItem>
                          <MenuItem value={30}>test2</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Collapse>
                </Grid>
                &emsp;
                <Grid item={true} xs={12} spacing={24} className={classes.detailButtonContainer}>
                  <MaterialButtonRouter
                    component={LinkRouter}
                    to="/PatientDatabase/PatientLabTest"
                    variant="contained"
                    color="secondary"
                    classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}
                  >
                    <KeyboardArrowRightIcon />
                    Save and prescribe exam
                  </MaterialButtonRouter>
                  <MaterialButtonRouter
                    component={LinkRouter}
                    to="/"
                    variant="outlined"
                    color="inherit"
                    classes={{ root: classes.detailButton }}
                  >
                    <KeyboardArrowRightIcon />
                    Print the visit
                  </MaterialButtonRouter>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientVisit);
export default styledComponent;
