import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about' id='About'>
        <div className="about-left">
            <h2>How It Started</h2>
            <h3>Our goal is to provide organizations with cutting-edge technological solutions.</h3>
            <p>We at Code Dev are your growth partner, not just a service provider. Our team of highly qualified experts specializes in providing digital transformation services, productivity-boosting software, and custom web development tailored to the particular requirements of companies in a variety of industries.</p>
            <p>At Code Dev, we consider technology to be a catalyst for development and change rather than merely a tool. By providing solutions that are not only creative but also dependable, scalable, and customized to meet their specific needs, we hope to establish enduring connections with our clients. We provide the experience, imagination, and commitment required to propel your success, whether you're a startup trying to build a digital presence or an organization trying to streamline processes.</p>
        </div>
        <div className="about-right">
            <div className="founderdiv">
                <img src="./akshay.png" alt="" />
            </div>

            <div className="about-info">
                <div>
                    <h4>8.1+</h4>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h4>400+</h4>
                    <p>Project Challenge</p>
                </div>
                <div>
                    <h4>1.5M $</h4>
                    <p>At Expendings</p>
                </div>
                <div>
                    <h4>94%</h4>
                    <p>Client Detention Rate</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
