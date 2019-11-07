import produce from 'immer';

import {
	ADD_NEW_PATIENT,
	DELETE_PATIENT,
	GET_PATIENTS,
	PatientsActionTypes,
	PatientsList,
	UPDATE_PATIENT_DETAILS,
} from '../types/patients'

export default function patients(state: PatientsList = {}, action: PatientsActionTypes): PatientsList{
	return produce(state, draft => {
		switch(action.type){
			case GET_PATIENTS :
				return { ...draft, ...action.patients };
			case ADD_NEW_PATIENT :
				draft[action.patient.id] = action.patient;
				return;
			case DELETE_PATIENT :
				delete draft[action.patient.id];
				return;
			case UPDATE_PATIENT_DETAILS :
				draft[action.patient.id] = action.patient;
				return
		}		
	})
}