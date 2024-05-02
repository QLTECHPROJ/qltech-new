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
class FilterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
	this.state = {
          email: '',
          number: '',
		  shown: "d-none",
		  shown_new: "d-none",
		  shown_captcha: "d-none"
		}
	this.submitForm = this.submitForm.bind(this);
	  this.email = this.email.bind(this);
	  this.number = this.number.bind(this);
  }
  
	componentDidMount() {
    
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
		 axios({
			  method: 'post',
			  url: 'https://steamlinedesign.com/qltech/formbucket/',
			  data: payload, // you are sending body instead
			  headers: {
			   // 'Authorization': `bearer ${token}`,
			  'Content-Type': 'multipart/form-data'
			  }, 
			}).then(function(response) {
			window.location.href = "https://www.qltech.com.au/thank-you/";
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
		<title>Your Premier Destination for Professional Website Creation- QL Tech</title>
		<meta name="title" content="Our Work | Agile software & digital marketing company Perth, Australia- QL Tech"></meta>
		<meta name="description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		 <meta name="keywords" content="QL Tech works, Our works, Portfolio, QL tech portfolio, digital marketing works, Agile development, SEO services, case studies"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Our Work | Agile software & digital marketing company Perth, Australia- QL Tech"></meta>
		<meta property="og:description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Our Work | Agile software & digital marketing company Perth, Australia- QL Tech"></meta>
		<meta property="twitter:description" content="Our Clients speaks about Our works. QL Tech's web & digital marketing services team achieved for business numbers as yours. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		</Helmet>
	 <div className="bg">
        <div className="area-bg">
			<Particles options={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": false,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 0}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
		<section className="breadcumbs-and-title-section">
			
			<div className="container text-center">
				<span className="section-subheading-heading">Professional Website Creation</span> 
				<h1 className="section-heading">
            Professional Website Creation
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
						<h2 class="section-heading">{post.packagesTitle}</h2>
						
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
													<h2 class="mb-0"><sup>$</sup>99</h2> <span class="text-capitalize">per year</span></div>
												<div class="price-content">
													<ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
													{prop.rows && prop.rows.map(
												(pro,k) => {
													return (	
																		
																		<li> <i class="fa fa-check mr-2"></i> <span class="c-black">{pro.text}</span></li>
																		)
												}
											)}
													</ul> </div>
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
						<h2 class="section-heading">{post.title}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.description }} 
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
					<div class="col-12">
						<h2 class="section-heading">{post.servicesTitle}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.servicesDesc }} 
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
					<div class="col-12">
						<h2 class="section-heading">{post.contactUsTitle}</h2>
						<div class="label-text" dangerouslySetInnerHTML={{ __html: post.contactUsDesc }} 
						/>
					</div>
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1  bg-white">
			<div class="container">
			<Webcontact />
			</div>
		</section>
		
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
					  packages {
						packagesTitle
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


