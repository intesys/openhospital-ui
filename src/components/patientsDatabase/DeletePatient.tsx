import React, { Component } from "react";

// local imports
import classNames from "classnames";
import styles from "./styles/DeletePatientDialog.style";

// material imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {DeletePatientUsingDELETERequest,PatientControllerApi} from '../../generate/apis';
import {Patient} from "../../generate/models";
export interface Props extends WithStyles<typeof styles> {}

interface State {
	labelWidth: number;
	error: any;
	isLoaded: boolean;
	items: Patient;
	anchorEl?: any;
    code: number;
}

class DeletePatient extends React.Component<Props, State> {

	public state: State = {
		labelWidth: 0,
		error: null,
		isLoaded: false,
		items:{},
		code: 45,
	}

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	public handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	public handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		const { classes } = this.props;

		const patientController: PatientControllerApi = new PatientControllerApi();
		const requestParams: DeletePatientUsingDELETERequest = {
			code: this.state.code
		};

		patientController.deletePatientUsingDELETE(requestParams)
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						result,
					});
					window.location.reload();
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				},
			);

	};
	public render(){
		const { classes, isOpen, handleClickClose, item } = this.props;

		return(
			<div>
				<Dialog
					open={isOpen}
					onClose={handleClickClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description">
					<DialogTitle id="alert-dialog-title">
						{"ENTER THE PATIENT'S CODE YOU WANT TO DELETE"}
					</DialogTitle>
					<DialogContent>
						&nbsp;
						<DialogContentText style={{textAlign:'center'}} id="alert-dialog-description">
							<b>Attention!</b> This action will completely erase patient data!
						</DialogContentText>
						&nbsp;
						<Grid className={classes.deleteInputField}>
							<TextField
								required={true}
								id="outlined"
								name='code'
								onChange={event => this.handleChange(event)}
								label="Patient ID"
								className={classNames(classes.formDeleteField, classes.cssOutlinedInput)}
								margin="normal"
								variant="outlined"/>
						</Grid>
					</DialogContent>
					<DialogActions >
						<Button  color="secondary">
							<b>EXIT</b>
						</Button>
						<Button onClick={this.handleSubmit} color="secondary">
							<b>DELETE</b>
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(DeletePatient);
export default styledComponent;