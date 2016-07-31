var EnvConfig = require('../config/envConfig');
var mailgun = require('mailgun-js')({apiKey: EnvConfig.api_key, domain: EnvConfig.domain});

module.exports =  {
	// Signup function
	signup: function(req, res, next) {

	},
	//send email auth to user
	sendMessage: function(req,res,next){
		console.log('these are my config keys', EnvConfig.api_key)
		var key = makeKey();
		var data = {
		  from: 'Shuggz <info@shuggz.com>',
		  to: 'joeycursoli2@gmail.com',
		  subject: 'Hello',
		  text: 'To get started enter this key in your Shuggz Page : '+ key
		};
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		  console.log(error);
		  if(body){res.status(200).send({token:'A confirmation number was sent to your email'})
			} else {
				res.status(422).send({error: 'Not a valid email address'});
			}
		});
		function makeKey(){
			var ar = [1,2,3,4,5,6,7,8,9];
			var char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'];
			var unique = '';
			for(var i = 0; i < 2;i++){
				 unique += char[Math.floor(Math.random() * (17 - 0 + 1))];
				 unique += ar[Math.floor(Math.random() * (8 - 0 + 1))];
				 unique += ar[Math.floor(Math.random() * (6 - 0 + 1))];
			}
			return unique;
		}

	}


}