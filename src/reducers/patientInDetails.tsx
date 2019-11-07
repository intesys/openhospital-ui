import produce from 'immer';

import {
	CLEAR_PATIENT_IN_DETAILS,
	GET_PATIENT,
	Patient,
	PatientInDetailsActionTypes
} from '../types/patients';

export default function patientInDetails(state: Patient = <Patient>{}, action: PatientInDetailsActionTypes){
	return produce(state, (draft) => {
		switch(action.type){
			case GET_PATIENT :
				return action.patient;
			case CLEAR_PATIENT_IN_DETAILS :
				return action.patient;
		}
	})
}