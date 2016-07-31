import React, {Component} from 'react';
import redux, {connect} from 'redux';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/actions.js';
import {Link} from 'react-router';


class Login extends Component {
	constructor(props){
		super(props);
	}
	handleFormSubmit({...args}){
		this.props.signupUser(args);
	}

	render(){
		const {fields: {username, email, password, confirm}, handleSubmit, errors} = this.props;
		return (
			<div className="loginAuth">
				<div className='top'>
					<h2 className="hTwo nonactive"><Link to={`login`}>Signin</Link> </h2>
					<h2 className="hTwo active"> Signup </h2>
				</div>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	       <div className='unit'>
	         <input className="text inputAuth" id="username" type="text" placeholder="Username" {...username}/>
	       </div>
	       <div className='unit'>
	         <input className="text inputAuth" id="email" type="email" placeholder="Email" {...email}/>
	         <div className='error'>{errors.email ? errors.email : ''}</div>
	       </div>
	       <div className='unit'>
	         <input className="text inputAuth" id="password" type="password" placeholder="Password" {...password}/>
	         <div className='error'>{errors.password && password.touched && errors.password}</div>
	       </div>
	       <div className='unit'>
	         <input className="text inputAuth" id="confirm" type="password" placeholder="Confirm" {...confirm}/>
	         	<div className='error'>{errors.confirm && confirm.touched && confirm.onBlur && errors.confirm}</div>
	         	<button className="authButton" type="submit">Submit</button>
	       </div>
				</form>
			</div>
		)
	}
}


function mapStateToProps(state){
  return { loginError: state.auth.error, authenticated: state.auth.authenticated };
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } 
  if(values.password !== values.confirm){
  	errors.confirm = 'Passwords do not match';
  }
   if(values.password&&values.password.length < 5){
		errors.password = 'Password needs to be at least 6 charachters!';
  }
  return errors;
}

export default reduxForm({
  form: 'login',
  fields: ['email','password', 'confirm', 'username'],
  validate
}, mapStateToProps, actions)(Login);
