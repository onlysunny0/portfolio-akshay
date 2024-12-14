import React from 'react'
import './Services.css'
import { BsPatchCheckFill } from "react-icons/bs";

function Services() {
  return (
    <div className='Services' id='Services'>
      <h2>My Services</h2>
      <div className='Bar'></div>

      <div className="service-down">
        <div>
            <img src="./icon/web.png" alt="" />
            <h3>Website</h3>
            <p>We design beautiful, SEO-optimized, and responsive websites that meet your company's needs.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> unique designs.</li>
                <li><span><BsPatchCheckFill/></span> Mobile-friendly layouts.</li>
                <li><span><BsPatchCheckFill/></span> loaded quickly.</li>
                <li><span><BsPatchCheckFill/></span> SEO-ready.</li>
                <li><span><BsPatchCheckFill/></span> scalable solutions.</li>
            </ul>
        </div>
        <div>
            <img src="./icon/brand.png" alt="" />
            <h3>Branding</h3>
            <p>We create distinctive, memorable brands that appeal to your target market and help you stand out from the competition.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> Unique brand identity.</li>
                <li><span><BsPatchCheckFill/></span> Consistent visual elements.</li>
                <li><span><BsPatchCheckFill/></span> Targeted messaging.</li>
                <li><span><BsPatchCheckFill/></span> Logo and typography design.</li>
                <li><span><BsPatchCheckFill/></span> creation of a brand strategy.</li>
            </ul>
        </div>
        <div>
            <img src="./icon/social.png" alt="" />
            <h3>Social Media</h3>
            <p>We develop powerful, captivating social media strategy to establish your brand and engage your audience.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> creation of original stuff.</li>
                <li><span><BsPatchCheckFill/></span> strategies for a certain audience.</li>
                <li><span><BsPatchCheckFill/></span> posting dates that are regular.</li>
                <li><span><BsPatchCheckFill/></span> Performance tracking and insights</li>
                <li><span><BsPatchCheckFill/></span> involvement of the community.</li>
            </ul>
        </div>

        <div>
            <img src="./icon/app.png" alt="" />
            <h3>Moble Apps</h3>
            <p>We create and develop mobile apps that are easy to use and function well, meeting your company's needs.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> Custom app design.</li>
                <li><span><BsPatchCheckFill/></span> Cross-platform compatibility.</li>
                <li><span><BsPatchCheckFill/></span> Fast performance.</li>
                <li><span><BsPatchCheckFill/></span> Seamless user experience.</li>
                <li><span><BsPatchCheckFill/></span> App store optimization.</li>
            </ul>
        </div>

        <div>
            <img src="./icon/fintech.png" alt="" />
            <h3>Fintech</h3>
            <p>Our specialty is developing cutting-edge, safe fintech solutions that improve user experiences and expedite financial services.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> Secure payment solutions.</li>
                <li><span><BsPatchCheckFill/></span> Blockchain integration.</li>
                <li><span><BsPatchCheckFill/></span> User-friendly interfaces.</li>
                <li><span><BsPatchCheckFill/></span> Real-time transaction processing.</li>
                <li><span><BsPatchCheckFill/></span> Regulatory compliance.</li>
            </ul>
        </div>

        <div>
            <img src="./icon/game.png" alt="" />
            <h3>Game</h3>
            <p>We produce top-notch, immersive games that provide captivating experiences on several platforms.</p>

            <ul>
                <li><span><BsPatchCheckFill/></span> unique game design.</li>
                <li><span><BsPatchCheckFill/></span> compatibility across platforms.</li>
                <li><span><BsPatchCheckFill/></span> Interactive gameplay.</li>
                <li><span><BsPatchCheckFill/></span> Amazing animations and visuals.</li>
                <li><span><BsPatchCheckFill/></span> Optimized performance.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
