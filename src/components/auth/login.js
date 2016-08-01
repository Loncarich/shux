import React, {Component} from 'react';
import redux, {connect} from 'redux';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/actions.js';
import {Link} from 'react-router'



class Login extends Component {
	constructor(props){
		super(props);
	}
	handleFormSubmit({...args}){
		this.props.loginUser(args);
	}

	render(){
		const {fields: {username, password}, handleSubmit, errors} = this.props;
		return (
			<div className="loginAuth">
			<div className='top'>
				<h2 className="hTwo active">signin</h2>
				<h2 className="hTwo nonactive">Signup</h2>
			</div>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	       <div className='unit'>
	         <input className="text inputAuth" id="username" type="text" placeholder="Username" {...username}/>
	       </div>
	       <div className='unit'>
	         <input className="text inputAuth" id="password" type="password" placeholder="Password" {...password}/>
	         <div className='error'>{errors.password && password.touched && errors.password}</div>
	       </div>
	       <button className="authButton" type="submit">Submit</button>
				</form>
				<div>
					<div className= 'help'>Forgot password?</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state){
  return { loginError: state.auth.error, authenticated: state.auth.authenticated };
}

function validate(values) {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  } 
  return errors;
}

export default reduxForm({
  form: 'login',
  fields: ['password', 'username'],
  validate
}, mapStateToProps, actions)(Login);
