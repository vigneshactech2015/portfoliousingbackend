import React from "react";
import classes from './contact.module.css';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ny51jw1', 'template_zhrb0j6', form.current, 'dstexrjWZFD_jMfBO')

      e.target.reset();
    };

    return(
<div className={classes.contact}>
<h2 className={classes.header}>Contact</h2>
<h5 className={classes.touch}>Get in touch with me by clicking on the button below</h5>
<div className={classes.displai}>
<div className={classes.form}>
<form ref={form} onSubmit={sendEmail}>
<input className={classes.inputid} type="text" name='name' placeholder="Your Full Name" required/><br/>
<input className={classes.inputid} type="email" name='email' placeholder="Your Email" required/><br/>
<textarea className={classes.inputid} name="message" rows="7" placeholder="Your Message" required/><br/>
<button type='submit' className={classes.inputbutton}>Send Message</button>
</form>
</div>

</div>
</div>
    )
}

export default Contact;