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
			<h2 className="hTwo active"> signin </h2>
				<h2 className="hTwo nonactive"> 
					<Link to={`/signup`}>Signup</Link>
				</h2>
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	       <div className='unit'>
	         <label className='labelAuth' for="username">Username</label>
	         <input className="text inputAuth" id="username" type="text" placeholder="username" {...username}/>
	       </div>
	       <div className='unit'>
	         <label className='labelAuth' for="password">password</label>
	         <input className="text inputAuth" id="password" type="password" placeholder="password" {...password}/>
	         <div className='error'>{errors.password && password.touched && errors.password}</div>
	       </div>
	       <button className="signin" type="submit">Submit</button>
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
