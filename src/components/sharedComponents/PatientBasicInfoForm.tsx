import React, { Component } from 'react';

// local imports
import classNames from 'classnames';
import styles from './styles/PatientBasicInfoForm.style';

// material imports
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export interface Props extends WithStyles<typeof styles> {}

class PatientBasicInfoForm extends Component<Props>{

	public render() {
		const { classes, extraInput } = this.props;
		return(
			<div>
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
								margin="normal"
								variant="outlined"/>
						</Grid>
						<Grid item={true} xs={12} sm={3}>
							<TextField
								id="outpatientNumber"
								label="Outpatient Number (OPD)"
								className={ classNames(classes.formField, classes.cssOutlinedInput) }
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
								variant="outlined"/>
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
								margin="normal"
								variant="outlined"/>
						</Grid>
						{extraInput(classes, classNames)}
					</Grid>
				</form>
			</div>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientBasicInfoForm);
export default styledComponent;