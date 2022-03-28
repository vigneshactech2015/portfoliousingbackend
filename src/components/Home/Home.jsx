import React from "react";
import AboutMe from "../aboutme/AboutMe";
import Skills from "../Skills/Skills";
import Certification from "../certifications/Certification";
import MyWorks from "../myworks/MyWorks";
import Contact from "../contact/Contact";
import Intro from "../../Intro/Intro";
const Home=()=>{
    return(
        <div>
        
    <Intro/>
    <AboutMe/>
    <Skills/>
    <Certification/>
    <MyWorks/>
    <Contact/>
    </div>
    )
}

export default Home;