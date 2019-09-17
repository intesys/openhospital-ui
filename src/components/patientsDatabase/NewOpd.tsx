import _ from "lodash";
import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";

// local imports
import classNames from "classnames";
import Spinner from "../sharedComponents/Spinner";
import { MaterialButtonRouter } from "../utils/LinkHelper";
import styles from "./styles/NewOpd.style";

// material imports
import Divider from "@material-ui/core/Divider";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// constants
import { PATH_NEW_LAB_TEST } from "../../config/constants"

export interface Props extends WithStyles<typeof styles> { }

interface State {
    InputLabelRef: number;
    labelWidth: number;
    error: any;
    isLoaded: boolean;
    items: any;
}

class NewOpd extends React.Component<Props, State> {
    public state: State = {
        labelWidth: 0,
        error: null,
        isLoaded: false,
        items: [],
        InputLabelRef: 0
    }

    public render() {
        const { classes } = this.props;

        return (
            <Grid item={true} xs={12} sm={9} className={classes.patientContent}>
                <Grid item={true} xs={12} className={classes.patientProfileHeader}>
                    <div style={{ flexDirection: "column", textAlign: "left" }}>
                        <Typography color="inherit" className={classes.patientName}>
                            Modotoky Tokai
                        </Typography>
                        <Typography color="inherit" className={classes.patientAddress}>
                            Provenance: <b>District, Village</b>
                        </Typography>
                    </div>
                </Grid>
                &emsp;
                <Divider className={classes.divider} />
                &emsp;
                <Grid item={true} xs={24} justify="center" className={classes.patientRadioOpd}>
                    <FormControlLabel
                        value="End"
                        control={<Radio color="secondary"/>}
                        label="Re-Attendance"
                        labelPlacement="end"/>
                    <FormControlLabel
                        value="End"
                        control={<Radio color="secondary"/>}
                        label=" New-Attendance"
                        labelPlacement="end"/>
                    <FormControlLabel
                        value="End"
                        control={<Radio color="secondary"/>}
                        label=" Referral from"
                        labelPlacement="end"/>
                    <FormControlLabel
                        value="End"
                        control={<Radio color="secondary"/>}
                        label=" Referral to"
                        labelPlacement="end"/>
                </Grid>
                <Grid container={true} item={true} spacing={24} className={classes.opdHeader} >
                    <Grid style={{marginLeft:30}}>
                        <Typography variant="inherit" className={classes.attendanceTitle}>
                            ATTENDANCE DATE
                        </Typography>
                    </Grid> 
                    <Grid style={{marginLeft:10}}>   
                        &nbsp;
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                    </Grid>
                    <Grid style={{marginLeft:120}}>
                        <Typography  variant="inherit" className={classes.opdNumberTitle}>
                            OPD N°
                        </Typography>
                    </Grid>
                    <Grid style={{marginLeft:10}}>
                        <TextField
                            id="outlined-input"
                            margin="normal"
                            variant="outlined"/>
                    </Grid>
                </Grid>
                <Spinner title="DESEASE TYPE"/>
                <Spinner title="DIAGNOSIS"/>
                <Spinner title="DIAGNOSIS N°2"/>
                <Spinner title="DIAGNOSIS N°3"/>
                <Grid item={true} style={{ marginTop: 50 }} xs={12} sm={12}>
                    <Typography color="inherit" className={classes.opdNotes}>
                        NOTES & SYMPTOM
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
                        variant="outlined"/>
                </Grid>
                <Grid item={true} xs={12} spacing={24} style={{ marginTop: 50, marginBottom: 20 }} className={classes.detailButtonContainer}>
                    <MaterialButtonRouter
                        component={LinkRouter}
                        to="/"
                        variant="contained"
                        color="secondary"
                        classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}>
                    <KeyboardArrowRightIcon />
                        Save OPD data
                    </MaterialButtonRouter>
                    <MaterialButtonRouter
                        component={LinkRouter}
                        to={PATH_NEW_LAB_TEST}
                        variant="contained"
                        color="secondary"
                        classes={{ root: classes.detailButton, label: classes.detailButtonLabelInverse }}>
                    <KeyboardArrowRightIcon />
                        Exam Lab Test
                    </MaterialButtonRouter>
                </Grid>
            </Grid>
        );
    }
}

const styledComponent = withStyles(styles, { withTheme: true })(NewOpd);
export default styledComponent;