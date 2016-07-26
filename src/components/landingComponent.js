import Expand from 'material-ui/svg-icons/navigation/expand-more';
import React, {Component} from 'react';

class Landing extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.handleOptions = this.handleOptions.bind(this);
	}
	handleOptions(){
		console.log(window.clientHeight)
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		        // you're at the bottom of the page
		    }

 if(document.body.scrollHeight > document.body.offsetHeight){
		for(let i = 0; i < document.body.scrollHeight;i+=2){
				setTimeout(()=>{window.scrollTo(0,i)},100+i)
			}
		}
		else{
			for(let i = document.body.scrollHeight; i > 0;i-=2){
				setTimeout(()=>{window.scrollTo(0,i); console.log(document.body.scrollHeight,document.body.offsetHeight)},100+i)
			}
		}
	}
	render(){
		return (
			<div style={{height:'130%'}}>
				<video autoPlay poster="https://i.vimeocdn.com/video/582542548.webp?mw=2700&mh=990&q=70" id="bgvid" loop>
				<source src="https://player.vimeo.com/external/175644724.hd.mp4?s=31f8ca986fad5a38f4ef8ee587db52b4a59109b1&profile_id=174" type="video/mp4" />
				</video>
				<div className='page center-xs'>
					<div className='col-xs-12 col-sm-8 col-md-6 col-lg-4'>
						<div className='content'>
							<div className='landing'>Shux</div>
							<div className='intro'>The Place to Meet People Like You</div>
						</div>
						<Expand style={{color:'white', marginTop:'50px', height:'70px', width:'70px'}} onClick={this.handleOptions}/>
					</div>
				</div>
				<div className='info'>
					<div className='landingInfo around-xs'>
							<div className='infoTitle box'>
								<div className='category'>Account</div>
								<div className='subCategory'>
									<div>Signup</div>
									<div>Login</div>
								</div>
							</div>
						<div className='infoTitle box'>
							<div className='category'>Community</div>
							<div className='subCategory'>
								<div>Team</div>
								<div>Blog</div>
							</div>
						</div>
						<div className='infoTitle box'>
							<div className='category'>Company</div>
							<div className='subCategory'>
								<div>Jobs</div>
								<div>Contact</div>
							</div>
						</div>
						<div className='infoTitle box'>
							<div className='category'>Legal</div>
							<div className='subCategory'>
								<div>Privacy</div>
								<div>Terms</div>
								<div>Safety</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Landing;