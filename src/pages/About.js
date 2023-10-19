import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutQuote from "../components/About/AboutQuote";
import Brands from "../components/Brands";
import Portfolio from "../components/Portfolio";

const About = () =>{
    return(
     <>
         <AboutHero/>
         <AboutQuote/>
         <Brands/>
         <Portfolio/>
     </>
    )
}

export default About;