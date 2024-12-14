'use client'

import React, { useState } from 'react'
import './Projects.css'

 
 

function Projects() {
    
    const web= [
        {
            img : "./portfolio/codedev.svg",
            name: "Code Dev",
            type : "Web App Development",
            url: "https://www.codedevservices.com/"
        },
        {
            img : "./portfolio/rh.svg",
            name: "The world or RH",
            type : "Web App Development",
            url: "https://rh.com/us/en/"
        },
        {
            img : "./portfolio/alchemy.svg",
            name: "Alchemy Design",
            type : "Web App Development",
            url: "https://www.alchemydesign.ae/"
        },
        {
            img : "./portfolio/digitalsilk.svg",
            name: "Digital Silk",
            type : "Web App Development",
            url: "https://www.digitalsilk.com/"
        },
        {
            img : "./portfolio/diva.svg",
            name: "Diva Boutique",
            type : "Web App Development",
            url: "https://www.divaboutiqueonline.com/"
        },
        {
            img : "./portfolio/fantasy.svg",
            name: "Fantasy Khiladi",
            type : "Web App Development",
            url: "https://fantasykhiladi.com/"
        },
        
        {
            img : "./portfolio/global.svg",
            name: "Global Assignment Help",
            type : "Web App Development",
            url: "https://www.globalassignmenthelp.com/"
        },
        {
            img : "./portfolio/gradding.svg",
            name: "Gradding",
            type : "Web App Development",
            url: "https://www.gradding.com/"
        },
        {
            img : "./portfolio/lernovate.svg",
            name: "Lernovate",
            type : "Web App Development",
            url: "https://learnovatedigital.com/"
        },
        {
            img : "./portfolio/metablock.svg",
            name: "MetaBlock",
            type : "Web App Development",
            url: "https://metablocktechnologies.in/"
        },
        {
            img : "./portfolio/orbit.svg",
            name: "Orbit Training Center",
            url: "https://orbittraining.ae/",
            type : "Web App Development",
        },
        {
           img : "./portfolio/plus.svg",
           type : "Web App Development",
           name: "Plus 500",
           url: "https://www.plus500.com/en-ae/"
        },
        
       
    ]

    const app = [
        {
            img : "./Project/ejuuz.png",
            type : "Mobile App Development",
            name: "Ejuuz",
            url: ""
         },
    ];
    const fintech = [
        {
            img : "./Project/ejuuz.png",
            type : "E Wallet",
            name: "Ejuuz",
            url: ""
         },
    ];
    const ecom = [
        {
            img : "./Project/ejuuz.png",
            type : "Marketplace Application",
            name: "Ejuuz",
            url: ""
        },
    ];
    const [tab , setTab] = useState(web)
    const [activelink , setactivelink] = useState(0);
    const tabs= [
        {id:web,tab:"WebSites"},
        {id:app,tab:"Mobile App"},
        {id:fintech,tab:"Fintech" },
        {id:ecom,tab:"Ecommerce"}
      ]

      const changecards = (index) => {
        setTab(tabs[index].id)
        setactivelink(index);
      };
  return (
    <div className='projects'>
        <h2>My Projects</h2>
        <div className="Bar"></div>


        <div className="tabs">
            {
                tabs.map((id,index)=>{
                    return(
                            <p key={index}  className={`tab-links ${activelink === index ? 'active-link' : ''}`} onClick={()=>{changecards(index)}} >{id.tab}</p>
                    )
                })
            }
        </div>


        <div className="project-list">
        {
            tab.map((e, index)=>{
                return(
                    <div className="project-show" key={index}>
                        <a href={e.url} target="_blank">
                            <img src={e.img} alt="" />
                            <p>{e.type}</p>
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

export default Projects
