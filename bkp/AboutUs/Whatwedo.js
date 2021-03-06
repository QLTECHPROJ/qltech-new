import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





const Whatwedo = () => (
  <StaticQuery
    query={graphql`
      query {
    allWpWhatwedo {
                edges {
                  node {
                    WhatWeDo {
                      descp
                      icon{
						  sourceUrl
					  }
                      title
                    }
                  }
                }
              }
            
        }
    `}
    render={data => (
		<section className="about-us-section-3  bg-white">
        <div className="container">
            <div className="main-panel">
                
                <span className="section-subheading-heading">Our Values</span>
                <h2 className="section-heading text-center">
                Foundations that define our character, shape culture and build trust.
                </h2>
                <div className="row">
                {data &&
                    data.allWpWhatwedo &&
                    data.allWpWhatwedo.edges.map(
                
                    
                
                    prop => {
                    return (   
                        <div className="col-lg-4 col-md-6">
                            <div className="thumbnial">
                                <div className="thumbnial-bg"></div>
                                
                                 <div className="thumbnial-icon">
                                  {(prop.node.WhatWeDo.icon != null) ? (<img  src={prop.node.WhatWeDo.icon.sourceUrl} className="img-fluid" alt=""/>) : ('')}
                                </div> 
								
								
								
								
                                
                                <h3 className="thumbnial-heading">{prop.node.WhatWeDo.title}</h3>
                                <p className="label-text">{prop.node.WhatWeDo.descp}</p>
                                
                            </div>
                        </div>
                        )
                        }
                    )}  
                    
                </div>
            </div>
        </div>
    </section>
    )}
	/>
)

export default Whatwedo
