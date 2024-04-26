import React, { Component } from "react"
import { Link, StaticQuery , graphql} from 'gatsby';
import Isotope from "isotope-layout/js/isotope";
import PropTypes from 'prop-types';
import Particles from "react-tsparticles";
import Layout from '../components/Layout'
import ReactWOW from 'react-wow'
import Helmet from 'react-helmet'
class FilterGrid extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
  componentDidMount() {
    
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
            Success stories
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Professional Website Creation</Link> \</li>
					<li>Work</li>
				</ul>
			</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-9 offset-md-1">
						<h2 class="section-heading">{post.title}</h2>
						<p class="label-text" dangerouslySetInnerHTML={{ __html: post.description }} 
						>
					</div>
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-9 offset-md-1">
						<h2 class="section-heading">{post.servicesTitle}</h2>
						<p class="label-text" dangerouslySetInnerHTML={{ __html: post.servicesDesc }} 
					</div>
				</div>
			</div>
		</div>
		</section>
		<section className="about-us-section-1  bg-white">
		<div class="container">
			<div class="main-panel">
				<div class="row">
					<div class="col-9 offset-md-1">
						<h2 class="section-heading">{post.packagesTitle}</h2>
						
					</div>
					<div class="col-12">
						<div class="row justify-content-center">
							
							<div class="col-md-6 col-lg-4 mb-30">
								<div class="price-item text-center">
									<div class="price-top">
										<h4>Personal</h4>
										<h2 class="mb-0"><sup>$</sup>99</h2> <span class="text-capitalize">per year</span></div>
									<div class="price-content">
										<ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Eget erovtiu faucid</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Cras justo odio</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Morbi leo risus</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Porta consectetur ac</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span> Vestibulum at eros</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Adipisci atque beatae</span></li>
										</ul> <a href="#" class="btn btn-custom">Buy now</a></div>
								</div>
							</div>
							<div class="col-md-6 col-lg-4 mb-30">
								<div class="price-item text-center popular">
									<div class="price-top">
										<h4>Business</h4>
										<h2 class="mb-0"><sup>$</sup>299</h2> <span class="text-capitalize">per year</span></div>
									<div class="price-content">
										<ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Eget erovtiu faucid</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Cras justo odio</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Morbi leo risus</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Porta consectetur ac</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span> Vestibulum at eros</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Adipisci atque beatae</span></li>
										</ul> <a href="#" class="btn btn-custom btn-light">Buy now</a></div>
								</div>
							</div>
							<div class="col-md-6 col-lg-4 mb-30">
								<div class="price-item text-center">
									<div class="price-top">
										<h4>Enterprise</h4>
										<h2 class="mb-0"><sup>$</sup>399</h2> <span class="text-capitalize">per year</span></div>
									<div class="price-content">
										<ul class="border-bottom mb-30 mt-md-4 pb-3 text-left">
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Eget erovtiu faucid</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Cras justo odio</span></li>
											<li> <i class="zmdi zmdi-check mr-2"></i> <span class="c-black">Morbi leo risus</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Porta consectetur ac</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span> Vestibulum at eros</span></li>
											<li> <i class="zmdi zmdi-close mr-2"></i> <span>Adipisci atque beatae</span></li>
										</ul> <a href="#" class="btn btn-custom">Buy now</a></div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
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

