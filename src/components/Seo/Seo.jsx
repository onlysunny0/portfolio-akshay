'use client'
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './Seo.css'
function Seo() {
     const [number , setNumber] = useState(0);
    
        
        
      const Carousel =[
        "./casestudy/seo1.jpg", "./casestudy/seo2.jpg", "./casestudy/seo3.jpg", "./casestudy/seo4.jpg",
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
      <h2>Increasing Visibility through Superior SEO</h2>
      <p>Search Engine Optimization (SEO) is the backbone of online discoverability. Through meticulous keyword research, on-page optimization, and performance tracking, I have helped businesses achieve higher rankings and consistent traffic growth. Explore the case studies below, featuring rising SEO charts that showcase the power of optimized strategies in action.</p>
      <div className="carosel-btn">
                  <button onClick={decresecarosel}><FaArrowLeft /></button>
                  <button onClick={incresecarosel}><FaArrowRight /></button>
      </div>
      <img src={Carousel[number]} alt="" />


    </div>
  )
}

export default Seo
