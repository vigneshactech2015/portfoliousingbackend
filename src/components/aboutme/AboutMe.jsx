import React from "react";
import classes from './aboutme.module.css';
const AboutMe=()=>{
    return(
        <section className={classes.about}>
    <h1 className={classes.name}>About Me</h1>
        <p className={classes.para}>I'm a greenhorn React Developer with hands-on experience in identifying web-based user interactions along with designing &
    implementing highly-responsive user interface components by deploying React concepts.Proficient in translating designs into highquality
    code, and writing application interface code via JavaScript and ReactJS workflows.Adept at monitoring & maintaining frontend
    performance and troubleshooting & debugging the same to bolster overall performance.</p>
    </section>
    )
};

export default AboutMe;