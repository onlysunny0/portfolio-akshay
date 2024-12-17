import React from 'react'
import './Portfolio.css'
import { FaLink } from "react-icons/fa";

function Portfolio() {
    const portfolio = [
        {
           img : "./portfolio/codedev.svg",
           name: "Code Dev",
           decription: "I created a website for a professional IT solutions company that was designed for SEO, SMM, and a smooth user experience to increase traffic and engagement.",
           url: "https://www.codedevservices.com/"
        },
        {
            img : "./portfolio/rh.svg",
            name: "The world or RH",
            decription: "I helped with the construction and performance marketing of a high-end home goods website, improving user experience and increasing traffic using SEO and SMM tactics.",
            url: "https://rh.com/us/en/"
        },
        {
            img : "./portfolio/alchemy.svg",
            name: "Alchemy Design",
            decription: "I created a website for luxury interior design, maximizing SEO and SMM to increase exposure and customer interaction.",
            url: "https://www.alchemydesign.ae/"
        },
        {
            img : "./portfolio/digitalsilk.svg",
            name: "Digital Silk",
            decription: "A digital agency website I enhanced with optimized development, SEO, and SMM strategies to drive traffic and improve performance.",
            url: "https://www.digitalsilk.com/"
        },
        {
            img : "./portfolio/diva.svg",
            name: "Diva Boutique",
            decription: "An online fashion store I developed, focusing on SEO and SMM to boost visibility, traffic, and online sales.",
            url: "https://www.divaboutiqueonline.com/"
        },
        {
            img : "./portfolio/fantasy.svg",
            name: "Fantasy Khiladi",
            decription: "I created a fantasy sports platform that uses SEO and SMM tactics to boost traffic and user engagement.",
            url: "https://fantasykhiladi.com/"
        },
        {
            img : "./portfolio/global.svg",
            name: "Global Assignment Help",
            decription: "I created a platform for academic help, and I improved its effectiveness by using SEO and SMM techniques to increase user engagement and generate traffic.",
            url: "https://www.globalassignmenthelp.com/"
        },
        {
            img : "./portfolio/gradding.svg",
            name: "Gradding",
            decription: "I created an instructional platform that was optimized using SEO and SMM techniques to increase user engagement, traffic, and visibility.",
            url: "https://www.gradding.com/"
        },
        {
            img : "./portfolio/lernovate.svg",
            name: "Lernovate",
            decription: "I created an e-learning platform with an emphasis on SEO and SMM to increase traffic, visibility, and user engagement.",
            url: "https://learnovatedigital.com/"
        },
        {
            img : "./portfolio/metablock.svg",
            name: "MetaBlock",
            decription: "I created a website for technological solutions, maximizing performance with SEO and SMM tactics to boost traffic and improve user interaction.",
            url: "https://metablocktechnologies.in/"
        },
        {
            img : "./portfolio/orbit.svg",
            name: "Orbit Training Center",
            decription: "I created a website for training services with an emphasis on SEO and SMM to raise awareness, improve traffic, and promote user interaction.",
            url: "https://orbittraining.ae/"
        },
        {
            img : "./portfolio/plus.svg",
            name: "Plus 500",
            decription: "A trading platform website I worked on, optimizing it with SEO and SMM strategies to enhance user engagement and drive traffic.",
            url: "https://www.plus500.com/en-ae/"
        },
        
    ]



  return (
    <div className='portfolio' id='Portfolio'>
      <h2>My Portfolio</h2>
      <div className="Bar"></div>


      <div className="portfolio-down">
        {
            portfolio.map((e , index)=>{
                return(
                    <div className="portfolio-project" key={index}>
                        
                            <img src={e.img} alt="" />
                            
                            <div className="protfolio-hover">
                                    <h4>{e.name}</h4>
                                    <p>{e.decription}</p>
                                    <a href={e.url} target="_blank"><FaLink /></a>
                            </div>
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Portfolio
