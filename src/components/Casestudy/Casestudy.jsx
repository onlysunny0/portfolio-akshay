'use client'
import React, { useEffect, useState } from "react";
import "./Casestudy.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function Casestudy() {
    const [number , setNumber] = useState(0);

    
    
  const Carousel = [
    {
      heading: "Increasing Visibility through Superior SEO",
      decription:"Search Engine Optimization (SEO) is the backbone of online discoverability. Through meticulous keyword research, on-page optimization, and performance tracking, I have helped businesses achieve higher rankings and consistent traffic growth. Explore the case studies below, featuring rising SEO charts that showcase the power of optimized strategies in action.",
      image: "./casestudy/seo1.jpg",
    },
    {
      heading: "Increasing Visibility through Superior SEO",
      decription:"Search Engine Optimization (SEO) is the backbone of online discoverability. Through meticulous keyword research, on-page optimization, and performance tracking, I have helped businesses achieve higher rankings and consistent traffic growth. Explore the case studies below, featuring rising SEO charts that showcase the power of optimized strategies in action.",
      image: "./casestudy/seo2.jpg",
    },
    {
      heading: "Boosting Organic Social Media Growth with Useful Insights",
      decription:"Strategic planning, interesting content, and a thorough comprehension of audience behavior are necessary for organic social media growth. I have assisted brands in achieving notable growth without the use of paid promotions by evaluating insights, refining content strategy, and cultivating genuine interactions. View the following case studies to see how organic approaches produced significant outcomes.",
      image: "./casestudy/growth1.png",
    },
    {
      heading: "Increasing Interaction through Posting on Social Media",
      decription:"The secret to preserving brand awareness and cultivating audience loyalty is regular and interesting social media posting. I have assisted brands in improving their online visibility and establishing deep connections with their audience by using platform trends, scheduling wisely, and creating original content. View the outcomes of successful social media posting by looking through the case studies below.",
      image: "./casestudy/socialpost.png",
    },
    {
      heading: "Using Social Media to Promote Brands",
      decription:"Social media is an effective tool for connecting with people and increasing brand exposure. My proficiency in crafting focused campaigns, producing captivating content, and utilizing platform-specific tactics has aided companies in growing their fan base, boosting interaction, and attaining quantifiable outcomes. Explore the case studies that follow to learn about successful social media marketing campaigns.",
      image: "./casestudy/social1.png",
    },
    {
      heading: "Increasing Visibility through Superior SEO",
      decription:"Search Engine Optimization (SEO) is the backbone of online discoverability. Through meticulous keyword research, on-page optimization, and performance tracking, I have helped businesses achieve higher rankings and consistent traffic growth. Explore the case studies below, featuring rising SEO charts that showcase the power of optimized strategies in action.",
      image: "./casestudy/seo3.jpg",
    },
    {
      heading: "E-commerce Transformation with Verified Outcomes",
      decription:
        "The worldwide marketplace is changing due to e-commerce, and I work on helping online firms expand in quantifiable ways. I've assisted e-commerce firms in achieving greater traffic, higher conversion rates, and steady revenue development through data-driven marketing strategies, strategic design, and flawless user experiences. View the impact of these solutions in action by looking through the case studies below.",
      image: "./casestudy/ecom1.png",
    },
    {
      heading: "Using Social Media to Promote Brands",
      decription:"Social media is an effective tool for connecting with people and increasing brand exposure. My proficiency in crafting focused campaigns, producing captivating content, and utilizing platform-specific tactics has aided companies in growing their fan base, boosting interaction, and attaining quantifiable outcomes. Explore the case studies that follow to learn about successful social media marketing campaigns.",
      image: "./casestudy/social2.png",
    },
    {
      heading: "Increasing Visibility through Superior SEO",
      decription:"Search Engine Optimization (SEO) is the backbone of online discoverability. Through meticulous keyword research, on-page optimization, and performance tracking, I have helped businesses achieve higher rankings and consistent traffic growth. Explore the case studies below, featuring rising SEO charts that showcase the power of optimized strategies in action.",
      image: "./casestudy/seo4.jpg",
    },
    {
        heading: "E-commerce Transformation with Verified Outcomes",
        decription:
          "The worldwide marketplace is changing due to e-commerce, and I work on helping online firms expand in quantifiable ways. I've assisted e-commerce firms in achieving greater traffic, higher conversion rates, and steady revenue development through data-driven marketing strategies, strategic design, and flawless user experiences. View the impact of these solutions in action by looking through the case studies below.",
          image: "./casestudy/ecom2.png",
      },
      {
        heading: "Using Social Media to Promote Brands",
        decription:"Social media is an effective tool for connecting with people and increasing brand exposure. My proficiency in crafting focused campaigns, producing captivating content, and utilizing platform-specific tactics has aided companies in growing their fan base, boosting interaction, and attaining quantifiable outcomes. Explore the case studies that follow to learn about successful social media marketing campaigns.",
        image: "./casestudy/social3.png",
      },
      {
        heading: "E-commerce Transformation with Verified Outcomes",
        decription:
          "The worldwide marketplace is changing due to e-commerce, and I work on helping online firms expand in quantifiable ways. I've assisted e-commerce firms in achieving greater traffic, higher conversion rates, and steady revenue development through data-driven marketing strategies, strategic design, and flawless user experiences. View the impact of these solutions in action by looking through the case studies below.",
          image: "./casestudy/ecom3.png",
      },
      {
        heading: "Boosting Organic Social Media Growth with Useful Insights",
        decription:"Strategic planning, interesting content, and a thorough comprehension of audience behavior are necessary for organic social media growth. I have assisted brands in achieving notable growth without the use of paid promotions by evaluating insights, refining content strategy, and cultivating genuine interactions. View the following case studies to see how organic approaches produced significant outcomes.",
        image: "./casestudy/growth2.png",
      },
      {
        heading: "E-commerce Transformation with Verified Outcomes",
        decription:
          "The worldwide marketplace is changing due to e-commerce, and I work on helping online firms expand in quantifiable ways. I've assisted e-commerce firms in achieving greater traffic, higher conversion rates, and steady revenue development through data-driven marketing strategies, strategic design, and flawless user experiences. View the impact of these solutions in action by looking through the case studies below.",
          image: "./casestudy/ecom4.png",
      },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if(number+1<Carousel.length){
        setNumber(number + 1)
      }else{
          setNumber(0);
      }
    }, 3000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

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
    <div className="casestudy">
      <h2>SEO & SMM Case Studies</h2>
      <div className="Bar"></div>
      <div className="casestudy-down">
        <div className="carosel-btn">
            <button onClick={decresecarosel}><FaArrowLeft /></button>
            <button onClick={incresecarosel}><FaArrowRight /></button>
        </div>
        <div className="carousel">
          <div className="carousel-left">
            <h3>{Carousel[number].heading}</h3>
            <p>{Carousel[number].decription}</p>
          </div>
          <div className="carousel-right">
            <img src={Carousel[number].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
