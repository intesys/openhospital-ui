import { combineReducers } from 'redux';
import loading from './loading';
import patientInDetails from './patientInDetails';
import patients from './patients';

export const rootReducer = combineReducers({
	patientInDetails,
	patients,
	loading,
});

export type AppState = ReturnType<typeof rootReducer>