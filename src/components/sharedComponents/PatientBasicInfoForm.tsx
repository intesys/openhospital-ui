import React, { Component } from 'react';

// local imports
import styles from './styles/PatientBasicInfoForm.style';
import classNames from 'classnames';

// material imports
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export interface Props extends WithStyles<typeof styles> {}

class PatientBasicInfoForm extends Component<Props>{
	

	constructor(props) {
		super(props)
  
		this.state = {
		 patientID: '',
		 outpatientNumber: '',
		 inpatientNumber: ''     
		}
  
	   
        
		this.handleInputChange = this.handleInputChange.bind(this);
	   }
  
	   handleInputChange(e) {
		  this.setState({
			  [e.target.name]: e.target.value
		  });
	  }

	render() {
		const { classes, extraInput } = this.props
		return(
			<div>
				 <form  onSubmit={this.handleSubmit}>
					<Grid container item spacing={24}>
						<Grid item xs={12} sm={3}>
							<TextField
								name="patientID"
								label="Patient ID (PID)"
								type="text"
								onChange={this.handleInputChange}
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
						<Grid item xs={12} sm={3}>
							<TextField
								name="outpatientNumber"
								label="Outpatient Number (OPD)"
								onChange={this.handleInputChange}
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
						<Grid item xs={12} sm={3}>
							<TextField
								name="inpatientNumber"
								label="Inpatient Number (IPD)"
								onChange={this.handleInputChange}
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
					&emsp;
					<Grid>
                        <Button type="submit" variant="outlined" color="inherit" classes={{ root: classes.button, label: classes.buttonLabel }}>
                            SEARCH
                        </Button>
					</Grid>	
				</form>
			</div>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(PatientBasicInfoForm);
export default styledComponent;