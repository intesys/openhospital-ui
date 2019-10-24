import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Radio from '@material-ui/core/Radio';
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import classNames from "classnames";
import { Patient } from 'generate';
import _ from "lodash";
import MUIDataTable from "mui-datatables";
import * as React from "react";
import { Link as LinkRouter, RouteComponentProps } from "react-router-dom";
import { GetPatientUsingGETRequest, PatientControllerApi } from '../../generate/apis';
import { MaterialButtonRouter, MaterialLinkRouter } from "../utils/LinkHelper";
import styles from "./styles/Opd.style";
export interface Props extends WithStyles<typeof styles> { }

interface State {
  InputLabelRef: number;
  labelWidth: number;
  error: any;
  isLoaded: boolean;
  item: Patient;
  
}

interface IRouteParams {
  id: string;
}

interface IProps extends RouteComponentProps<IRouteParams> { }

class PatientOpd extends React.Component<IProps> {
  public state: State = {
    labelWidth: 0,
    error: null,
    isLoaded: false,
    item: {},
    InputLabelRef: 0
    
  };

  public componentDidMount() {

    const patientController: PatientControllerApi = new PatientControllerApi();
    const requestParams : GetPatientUsingGETRequest = {
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

  public render() {
    const { classes } = this.props;
    
    const columns = ["Date","Disease","Disease Type","Status"];
    
    const data = [
      ["15/09/2019","Meningitis","Priority infectious deseases","new"],
      ["15/09/2019","Meningitis","Priority infectious deseases","new"],
      ["15/09/2019","Meningitis","Priority infectious deseases","new"],
      ["15/09/2019","Meningitis","Priority infectious deseases","new"],
      ["15/09/2019","Meningitis","Priority infectious deseases","new"],
    ];

    const options = {
      filterType: 'checkbox',
    };

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
                <Typography color="inherit">Patient OPD</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item={true} xs={12}>
              <Typography variant="inherit" className={classes.patientTitle}>
                PATIENT OPD
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
              <Grid item={true} xs={12} sm={9} className={classes.patientContent}>
                <Grid item={true} xs={12} className={classes.patientProfileHeader}>
                  <div style={{ flexDirection: "column", textAlign: "left" }}>
                    <Typography color="inherit" className={classes.patientName}>
                      {this.state.item.firstName} {this.state.item.secondName}
                    </Typography>
                    <Typography color="inherit" className={classes.patientAddress}>
                      Provenance: <b>{this.state.item.address},{this.state.item.city}</b>
                    </Typography>
                  </div>
                  <MaterialButtonRouter component={LinkRouter} to={"/PatientDatabase/NewOpd/"+this.props.match.params.id}
                                        variant="outlined" color="inherit" classes={{ root: classes.opdButton }}>
                     Create New OPD
                  </MaterialButtonRouter>
                </Grid>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                
                <MUIDataTable
                 title={"OPD HISTORY"}
                 data={data}
                 columns={columns}
                 options={options}
                 />
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientOpd);
export default styledComponent;
