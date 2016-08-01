import axios from 'axios';
import {browserHistory} from 'react-router';
import {
	AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REMOVE_ERROR
} from './actionTypes';
// comment this oout for production
const API_URL = 'http://localhost:8080';

export function loginUser({...userInfo}){
	return function(dispatch){
		dispatch({ type: AUTH_USER });
	}
}
export function signupUser({...userInfo}){
	return function(dispatch){
		axios.post(`${API_URL}/signup`,userInfo)
		.then(response => {
			dispatch({ type: AUTH_USER });
			console.log('this is the response in the singup action',response)
			localStorage.setItem('token', response.data.token || 'false');
			browserHistory.push('/profile');
		})
		.catch(error => {
			console.log('this is the error in sugnup', error)
			dispatch({ type: UNAUTH_USER });
		})
	}
}
export function logoutUser({email, username, password}){
	return{
		type: UNAUTH_USER,
		payload:{}
	}
}