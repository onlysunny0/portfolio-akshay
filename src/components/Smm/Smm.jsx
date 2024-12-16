'use client'
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Smm() {
     const [number , setNumber] = useState(0);
    
        
        
      const Carousel =[
        "./casestudy/growth1.png",  "./casestudy/socialpost.png", "./casestudy/social1.png", "./casestudy/social2.png","./casestudy/social3.png","./casestudy/growth2.png"
      ]
    function incresecarosel(){
        // console.log(Carousel.length)
        if(number+1<Carousel.length){
            setNumber(number + 1)
        }else{
            setNumber(0);
        }
        
    }
    function decresecarosel(){
        if(number>0){
            setNumber(number - 1)
        }else{
            setNumber(Carousel.length-1);
        }
    }
  return (
    <div className='seosection'>
      <h2>Boosting Organic Social Media Growth with Useful Insights</h2>
      <p>Strategic planning, interesting content, and a thorough comprehension of audience behavior are necessary for organic social media growth. I have assisted brands in achieving notable growth without the use of paid promotions by evaluating insights, refining content strategy, and cultivating genuine interactions. View the following case studies to see how organic approaches produced significant outcomes.</p>
      <div className="carosel-btn">
                  <button onClick={decresecarosel}><FaArrowLeft /></button>
                  <button onClick={incresecarosel}><FaArrowRight /></button>
      </div>
      <img src={Carousel[number]} alt="" />


    </div>
  )
}

export default Smm