import {
	AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REMOVE_ERROR
} from './actionTypes';


export function loginUser({...userInfo}){
	return function(dispatch){
		dispatch({ type: AUTH_USER });
	}
}
export function signupUser({email, username, password}){
	return function(dispatch){
		dispatch({ type: AUTH_USER });
	}
}
export function logoutUser({email, username, password}){
	return{
		type: UNAUTH_USER,
		payload:{}
	}
}