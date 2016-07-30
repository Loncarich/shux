import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  REMOVE_ERROR
} from '../actions/actionTypes';

export default function (state ={}, action){
	switch(action.type){
		case AUTH_USER: {
			return{...state, error:'', authenticated:true};
		}
		case UNAUTH_USER:
      return {...state, authenticated: false };
      default:
      return{error:'',authenticated: false};
	}
}