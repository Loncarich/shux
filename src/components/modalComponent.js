import React, {Component} from 'react';
import Signup from './auth/signup';
import Signin from './auth/login';

class Modal extends Component {
	constructor(props){
		super(props);
		this.state = {option: ''};
	}
  render(){
  	console.log(this.props.item)
  	if(this.props.item === 'signup'){
  		console.log('inside the modal singnup')
	    return(
		    <div className='modal'>
		      <div className='container'>
		      	<Signup />
		      </div>
		    </div>
	    )
  	}
  	else if(this.props.item === 'signin'){
  		console.log('inside the modal singin')
	    return(
		    <div className='modal'>
		      <div className='loginContainer'>
		      	<Signin />
		      </div>
		    </div>
	    )
  	}
  	else{
  		return <noscript />
  	}
  }
}
export default Modal