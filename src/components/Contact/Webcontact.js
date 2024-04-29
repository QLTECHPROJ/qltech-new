import React from "react"
import SimpleReactValidator from 'simple-react-validator';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { init } from '@amplitude/analytics-browser';
import { track } from '@amplitude/analytics-browser';
import { Identify, identify } from '@amplitude/analytics-browser';
const recaptchaRef = React.createRef();
class Webcontact extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
		this.state = {
          first_name: '',
          last_name: '',
          email: '',
          number: '',
          goal: '',
		  shown: "d-none",
		  shown_new: "d-none",
		  shown_captcha: "d-none"
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.setTitle = this.setTitle.bind(this);
	  this.setln = this.setln.bind(this);
	  this.email = this.email.bind(this);
	  this.number = this.number.bind(this);
	  this.goal = this.goal.bind(this);
	}
	
	setTitle(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	setln(e) {
		this.setState({
			last_name: e.target.value
		});
	}
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	number(e) {
		this.setState({
			number: e.target.value
		});
	}
	goal(e) {
		this.setState({
			goal: e.target.value
		});
	}
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		  
		
		
		const recaptchaValue = recaptchaRef.current.getValue();
		
		if(recaptchaValue == ''){
			
			this.setState({shown_captcha: "d-block"});
			setTimeout(
				function() {
					this.setState({shown_captcha: "d-none"});
				}
			.bind(this),
				2000
			);
			
			
			return false;
		}
const payload = {
			 
			  email: this.state.email,	
				number: this.state.number
				
			 
			}

			axios({
			  method: 'post',
			  url: 'https://admin.qltech.com.au/wp-json/new_ql/v1/mail',
			  data: payload, // you are sending body instead
			 
			}).then(function(response) {
				console.log(response);
			//window.location.href = "https://www.qltech.com.au/thank-you/";
		    });	
			
		
		//document.getElementById('form').submit()
	  } else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	  }
	}
	
  render (){
    return(
      <>
      <form method="POST" id="form" action=""  >
	  
	  
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-10">
									 <div className="row">
										
										<div className="col-md-12 mb-4">
											<label className="label-text">Email</label>
											<input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="" name="email" required/>
											{this.validator.message('Email', this.state.email, 'required|email')}
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Contact Number</label>
											<input type="text"  value={this.state.number} onChange={this.number} className="form-control" placeholder="" name="number" required/>
											{this.validator.message('Contact Number', this.state.number, 'required|numeric|min:10|max:10')}
										</div>
										
										
										<div className="col-md-12 mt-3">
											<ReCAPTCHA
												ref={recaptchaRef}
												sitekey=" 6Lc5jjEUAAAAAI1yf3CfFogxqiok5pt7wcF7_SKJ"
											/>
										</div>
										
										
										<p className={"text-danger er-msg "+this.state.shown_captcha} >Please Verify Captcha.</p>
										
										<input type="hidden" required className="form-control" name="url" value="/contact-us" />
										<input type="hidden" required className="form-control" name="form_name" value="Contact-us" />
										<p  className={"text-danger er-msg "+this.state.shown} >Invalid Message.</p>
										<p  className={"text-danger er-msg "+this.state.shown_new} >First name last name are must be different.</p>
										<div className="col-md-12  mb-4 ">
										<button type="button" onClick={this.submitForm} id="acone1" className="btn-default border-0 btn-sub" value="Submit">Submit</button>
											
										</div>
									</div>
								</div>
							</div>
						   
						</form>
    </>
    )
  }
}

export default Webcontact

