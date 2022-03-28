import React from "react"
import { FaMailBulk } from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import classes from './contactfixed.module.css';

const Contactfixed=()=>{
return(
    <div className={classes.fixedcontact} data-aos="fade-up-left">
    <div className={classes.gmail}>
    <a href="mailto:vigneshactech2015@gmail.com" className={classes.email}><FaMailBulk/></a>
    </div>
    <div className={classes.gmail}>
    <a href="https://api.whatsapp.com/send?phone=+919500982821" className={classes.email}><FaWhatsapp/></a>
    </div>
    <div className={classes.gmail}>
    <a href="https://www.linkedin.com/in/vignesh-vijayakumar-84b734159" className={classes.email}><FaLinkedin/></a>
    </div>
    </div>

)

}

export default Contactfixed;
