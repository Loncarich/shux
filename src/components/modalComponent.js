import React, {Component} from 'react';
import Signup from './auth/signup';
import Signin from './auth/login';

class Modal extends Component {
	constructor(props){
		super(props);
		this.state = {option: ''};
	}
  render(){
  	if(this.props.item === 'signup'){
	    return(
		    <div className='modal'>
		      <div className='container'>
		      	<Signup />
		      </div>
		    </div>
	    )
  	}
  	else if(this.props.item === 'signin'){
	    return(
		    <div className='modal'>
		      <div className='container'>
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