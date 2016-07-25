import React, {Component} from 'react';

class Landing extends Component{
	
	render(){
		return (
			<div>
				<video autoPlay poster="https://i.vimeocdn.com/video/533883117_640x360.jpg" id="bgvid" loop>
				<source src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2700/5/138504815/412314518.mp4?token=5796ddbd_0x041fa50a903503427870251976b93bf1bea80d6c" type="video/mp4" />
				</video>
				<div className='row center-xs'>
					<div className='col-xs-12 col-sm-8 col-md-6 col-lg-4'>
						<div className='content'>
							<div className='landing'>Shux</div>
							<div className='intro'>The Place to Meet People Like You</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Landing;