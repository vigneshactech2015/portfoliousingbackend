import React from 'react';
import classes from './certification.module.css';

const Certification=()=> {
  return (
    <div className={classes.certificate}>
    <h2 className={classes.name}>Certification</h2>
  
    <img src="./certificate.png" alt="certificate" className={classes.certificateimage}></img>
    
    </div>
  )
}

export default Certification;