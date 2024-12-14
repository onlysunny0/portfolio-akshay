import React from 'react'
import './Portfolio.css'

function Portfolio() {
    const portfolio = [
        {
           img : "./portfolio/codedev.svg",
           name: "Code Dev",
           url: "https://www.codedevservices.com/"
        },
        {
            img : "./portfolio/rh.svg",
            name: "The world or RH",
            url: "https://rh.com/us/en/"
        },
        {
            img : "./portfolio/alchemy.svg",
            name: "Alchemy Design",
            url: "https://www.alchemydesign.ae/"
        },
        {
            img : "./portfolio/digitalsilk.svg",
            name: "Digital Silk",
            url: "https://www.digitalsilk.com/"
        },
        {
            img : "./portfolio/diva.svg",
            name: "Diva Boutique",
            url: "https://www.divaboutiqueonline.com/"
        },
        {
            img : "./portfolio/fantasy.svg",
            name: "Fantasy Khiladi",
            url: "https://fantasykhiladi.com/"
        },
        {
            img : "./portfolio/global.svg",
            name: "Global Assignment Help",
            url: "https://www.globalassignmenthelp.com/"
        },
        {
            img : "./portfolio/gradding.svg",
            name: "Gradding",
            url: "https://www.gradding.com/"
        },
        {
            img : "./portfolio/lernovate.svg",
            name: "Lernovate",
            url: "https://learnovatedigital.com/"
        },
        {
            img : "./portfolio/metablock.svg",
            name: "MetaBlock",
            url: "https://metablocktechnologies.in/"
        },
        {
            img : "./portfolio/orbit.svg",
            name: "Orbit Training Center",
            url: "https://orbittraining.ae/"
        },
        {
            img : "./portfolio/plus.svg",
            name: "Plus 500",
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
                        <a href={e.url} target="_blank">
                            <img src={e.img} alt="" />
                            <h4>{e.name}</h4>
                        </a>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Portfolio
