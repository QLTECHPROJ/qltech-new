import React, { Component } from "react"
import { Link, StaticQuery , graphql} from 'gatsby';
import Isotope from "isotope-layout/js/isotope";
import PropTypes from 'prop-types';
import Particles from "react-tsparticles";
import Layout from '../components/Layout'
import ReactWOW from 'react-wow'
import Helmet from 'react-helmet'
import SimpleReactValidator from 'simple-react-validator';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Cookies from 'universal-cookie';
const recaptchaRef = React.createRef();
import Webcontact from '../components/Contact/Webcontact'
import ReactModal from 'react-modal'



class FilterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
	this.state = {
          email: '',
          number: '',
		  shown: "d-none",
		  shown_new: "d-none",
		  shown_captcha: "d-none",
		  isModalOpen: false,
		  plan: 0,
		  goal: '',
		  cs: '',
		  indus: '',
		 cn: ''
		  
		}
		this.submitForm = this.submitForm.bind(this);
	  this.email = this.email.bind(this);
	  this.number = this.number.bind(this);
	  this.goal = this.goal.bind(this);
	  this.cs = this.cs.bind(this);
	  this.indus = this.indus.bind(this);
	  this.cn = this.cn.bind(this);
  }
  
  handleModalOpen = (i) => {
	  console.log(i);
		this.setState({ isModalOpen: true})
		this.setState({ plan: i})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}
	componentDidMount() {
			axios({
			  method: 'get',
			  url: 'https://api.ipgeolocation.io/ipgeo?apiKey=ae9d7dabf2cb4b6ebf45d7ea109c8ee4'
			 
			}).then(function(response) {
				
			console.log(response.data.country_code2);
				if(response.data.country_code2 != "IN" && response.data.country_code2 != "AE"){
					//window.location.href = "https://www.qltech.com.au";
					console.log("here in cond");
					
				}
				
			
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
	
	cs(e) {
		this.setState({
			cs: e.target.value
		});
	}
	
	indus(e) {
		this.setState({
			indus: e.target.value
		});
	}
	
	cn(e) {
		this.setState({
			cn: e.target.value
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
			number: this.state.number,
			plan: this.state.plan,
			cn: this.state.cn,
			indus: this.state.indus,
			cs: this.state.cs,
			goal: this.state.goal,
		}

			axios({
			  method: 'post',
			  url: 'https://admin.qltech.com.au/wp-json/new_ql/v1/mail_web',
			  data: payload, // you are sending body instead
			 
			}).then(function(response) {
				
				if(response.data.ResponseCode == 200){
					window.location.href = "https://www.qltech.com.au/thank-you/";
				}
				else{
					alert(response.data.ResponseMsg);
					return false;
				}
			
		    });	
			
		  
	}
	else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	  }
	}
	
	

  render() {
    
	  const post = this.props.data.allWpPage.edges[0].node.WSC;
  console.log(post);
    return(
      // Filter Buttons
	  <Layout>
	  	<Helmet>
		<title>Web Development Services Perth | Web Development Agency Perth - QL Tech</title>
		<meta name="title" content="Web Development Services Perth | Web Development Agency Perth - QL Tech"></meta>
		<meta name="description" content="We develop stunning websites tailored to businesses' unique needs. With our understanding of the digital landscape, empower your brand to establish a strong online presence."></meta>
		 <meta name="keywords" content="Websites, digital, businesses' unique needs, web solutions, functional websites, Web development in Perth, website developers"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Web Development Services Perth | Web Development Agency Perth - QL Tech"></meta>
		<meta property="og:description" content="We develop stunning websites tailored to businesses' unique needs. With our understanding of the digital landscape, empower your brand to establish a strong online presence."></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Web Development Services Perth | Web Development Agency Perth - QL Tech"></meta>
		<meta property="twitter:description" content="We develop stunning websites tailored to businesses' unique needs. With our understanding of the digital landscape, empower your brand to establish a strong online presence."></meta>
	
	    </Helmet>
	 <div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="breadcumbs-and-title-section tpbg">
			
			<div className="container text-center">
				<span className="section-subheading-heading">Professional Website Creation</span> 
				<h1 className="section-heading">
            Customized web solutions at competitive prices in Perth Australia
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Home</Link> \</li>
					<li>Professional Website Creation</li>
				</ul>
			</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-12">
						<h2 class="section-heading text-center mb-5">{post.packagesTitle}</h2>
						
					</div>
					<div class="col-12">
						<div class="row justify-content-center">
							
							{post.packages && post.packages.map(
								(prop,i) => {
									return (
										<>
										<div class="col-md-6 col-lg-4 mb-30">
											<div class="price-item text-center">
												<div class="price-top">
													<h4>{prop.packagesTitle}</h4>
													<h2 class="mb-0 pric">{prop.price}</h2> </div>
												<div class="price-content">
													<ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
													{prop.rows && prop.rows.map(
												(pro,k) => {
													return (	
																		
																		<li> <i class="fa fa-check mr-2"></i> <span class="c-black">{pro.text}</span></li>
																		)
												}
											)}
													</ul> 
													<a href="javascript:;" onClick={() => this.handleModalOpen(i)} class="btn-default border-0 btn-sub" >Select Plan</a>
													</div>
											</div>
										</div>
										</>	
									)
								}
							)}
							
							
							
							
							
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-12">
						<h2 class="section-heading text-center mb-5">Why Choose QL Tech?</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.whyQltech }} 
						/>
					</div>
				</div>
			</div>
		</div>
		</section>
																																														<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-7">
						<h2 class="section-heading text-start   mb-5">{post.title}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.description }} 
						/>
					</div>
					<div class="col-5">
						<img src="https://admin.qltech.com.au/wp-content/uploads/2024/08/UAE-Web-Banner-01-2.png"/>
					</div>
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-5">
						<div class="img_wre">
							<img src="https://admin.qltech.com.au/wp-content/uploads/2024/08/UAE-Web-Banner-02-1.png"/>
						</div>
					</div>
					<div class="col-7">
						<h2 class="section-heading text-start mb-5">{post.servicesTitle}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.servicesDesc }} 
						/>
					</div>
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1 icongv  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-12">
						<h2 class="section-heading text-center mb-5">{post.industriesWeServe}</h2>
						
					</div>
				</div>
				<div class="row">
					{post.industries && post.industries.map(
								(prop,i) => {
									return (
									<>
										
									<div class="col-2 pad20">
										<div class="icn_box">
										<img src={prop.icon.sourceUrl} class="icn_img" />
										<p>{prop.indText}</p>
									</div>
						</div>
									</>
					)
								}
							)}				
				</div>
			</div>
		</div>
		</section>
		
		<section className="about-us-section-1 cont_us  ">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-lg-6 col-6 col-md-12">
						<h2 class="section-heading text-start  mb-5">{post.contactUsTitle}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.contactUsDesc }} 
						/>
						<p class="inf_cl_p">Feel free to contact us on </p>
						<h5 class="inf_cl"> <b>Email : <a href="mailto:sales@qltech.com.au" >sales@qltech.com.au</a></b></h5>
						<h5 class="inf_cl" > <b>Phone : +61 4 0405 4124 (AUD)</b></h5>
					</div>
					<div class="col-lg-6 col-6 col-md-12">
					<Webcontact />
					</div>
				</div>
			</div>
		</div>
		</section>
																																		     
		
		<ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
			
	  
	  
							 <form method="POST" id="form" action=""  >
	  
	  
							<div className="row justify-content-center">
								<div className="col-lg-10 col-md-8">
									 <div className="row">
									 <div className="col-md-12 mb-4">
											
											<input type="hidden" className="form-control" value={this.state.plan} onChange={this.plan} placeholder="" name="plan" required/>
											
										</div>
										
										
										<div className="col-md-12 mb-4">
											<label className="label-text">Company Name</label>
											<input type="email" className="form-control" value={this.state.cn} onChange={this.cn} placeholder="" name="email" required/>
											{this.validator.message('Company Name', this.state.cn, 'required')}
										</div>
									 <div className="col-md-12 mb-4">
											<label className="label-text">Industry</label>
											<select className="form-control" onChange={this.indus} >
												<option value="">Select Industry</option>
												<option value="Information Technology">Information Technology</option>
												<option value="Healthcare">Healthcare</option>
												<option value="Finance">Finance</option>
												<option value="Education">Education</option>
												<option value="Retail">Retail</option>
												<option value="Menufacturing">Menufacturing</option>
												<option value="Logistics and Transportation">Logistics and Transportation</option>
												<option value="Real Esatte">Real Esatte</option>
												<option value="Media & Entertainment">Media & Entertainment</option>
												<option value="Energy">Energy</option>
												<option value="Telecommunications">Telecommunications</option>
												<option value="Agriculture">Agriculture</option>
												<option value="Goverment">Goverment</option>
												<option value="Mining">Mining</option>
												<option value="Space">Space</option>
												<option value="Automotive">Automotive</option>
												<option value="Legal">Legal</option>
												<option value="Construction">Construction</option>
												<option value="Other">Other</option>
											
											</select>
											{this.validator.message('Industry', this.state.indus, 'required')}
										</div>
									<div className="col-md-12 mb-4" onChange={this.cs} >
											<label className="label-text">Company Size</label>
											<select className="form-control"  >
											<option value="">Select Company Size</option>
											<option value="Less than 5"> Less than 5</option>
											
											<option value="5-10">  5-10</option>
												<option value="10-20">  10-20</option>
											<option value="20-50">  20-50</option>
									
											<option value="50-100">  50-100</option>
											<option value="More than 100"> More than 100</option>
										
											
											</select>
											{this.validator.message('Company Size', this.state.cs, 'required')}
										</div>
									 <div className="col-md-12 mb-4">
											<label className="label-text">Company Email</label>
											<input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="" name="email" required/>
											{this.validator.message('Email', this.state.email, 'required|email')}
										</div>
										
										
										
										<div className="col-md-12 mb-4">
											<label className="label-text">Company Contact Number</label>
											<input type="text"  value={this.state.number} onChange={this.number} className="form-control" placeholder="" name="number" required/>
											{this.validator.message('Contact Number', this.state.number, 'required|numeric|min:10|max:10')}
										</div>
									 
									 
									 <div className="col-md-12">
											<label className="label-text">Your Goal</label>
											<textarea rows="3" onChange={this.goal} className="form-control" placeholder="" name="message" required>{this.state.goal}</textarea>
										</div>
										
										<div className="col-md-12 mt-3">
											<ReCAPTCHA
												ref={recaptchaRef}
												sitekey="6LfliiwqAAAAACFOqWuUVddqUrHE2DQUbaxTRNKk"
											/>
										</div>
										
										
										<p className={"text-danger er-msg "+this.state.shown_captcha} >Please Verify Captcha.</p>
										
										
										<div className="col-md-12  mb-4 ">
										<button type="button" onClick={this.submitForm} id="acone1" className="btn-default border-0 btn-sub" value="Submit">Submit</button>
											
										</div>
									 </div>
								</div>
							</div>
						   
						</form>
						   
					
            
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
	</Layout>
    )
	
  }
}

FilterGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const WC = () => (
	
	<StaticQuery
    query = {graphql`
      query{
       allWpPage(filter: {databaseId: {eq: 5470}}) {
			edges {
				node {
					title
					databaseId
					content
					id
					WSC {
					  title
					   description
					  servicesDesc
					  servicesTitle
					  packagesTitle
					  contactUsDesc
					  contactUsTitle
       						whyQltech
       					  industriesWeServe
	      					industries{
	    						icon{
			                                 sourceUrl
			                              	}
	   						indText
						}
					  packages {
						packagesTitle
      						price
						rows {
						  text
						}
					  }
					}
				}
			}
		}
      }
					  
    
  `}
  render={(data, count) => <FilterGrid data={data} count={count} />}
  />
	
	
)

export default WC


