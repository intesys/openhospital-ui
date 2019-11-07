import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

// api fuctions, which will be used inside the thunks, to be imported when ready
import {
	getPatientsAPI,
} from '../../dummyAPI';

import {
	GET_PATIENTS,
	PatientsActionTypes,
	PatientsList,
} from '../types/patients';

import { AppState } from '../reducers/index';
import { loading } from './loading';

function getPatients(patients: PatientsList): PatientsActionTypes{
	return {
		type: GET_PATIENTS,
		patients,
	}
}

export function getPatientsThunk(): ThunkAction<void, AppState, null, AnyAction>{
	return async (dispatch) => {
		dispatch(loading(true));
		const patients = await getPatientsAPI();
		dispatch(loading(false));
		dispatch(getPatients(patients));
	}
}

// function addNewPatient(patient){
// 	return {
// 		type: ADD_NEW_PATIENT,
// 		patient,
// 	}
// }

// export function addNewPatientThunk(){
// 	return (dispatch) => {
// 		return null
// 	}
// }

// function deletePatient(patient){
// 	return {
// 		type: DELETE_PATIENT,
// 		patient,
// 	}
// }

// export function deletePatientThunk(){
// 	return (dispatch) => {
// 		return null
// 	}
// }

// function updatePatientDetails(patient){
// 	return {
// 		type: UPDATE_PATIENT_DETAILS,
// 		patient,
// 	}
// }

// export function updatePatientDetailsThunk(){
// 	return (dispatch) => {
// 		return null
// 	}
// }