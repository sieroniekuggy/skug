import authReducer from './authReducer';
import postReducer from './postReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postReducer,
	projects: projectReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;
