import {
	AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REMOVE_ERROR
} from './actionTypes';

export function loginUser({email, username}){
	dispatch({ type: AUTH_USER });
}
export function signupUser({email, username, password}){
	dispatch({ type: AUTH_USER });
}
export function logoutUser({email, username, password}){
	dispatch({ type: AUTH_USER });
}