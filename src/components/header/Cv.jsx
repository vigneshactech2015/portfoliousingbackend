import React from "react";
import something from './resume.pdf';
import classes from './cv.module.css';

import { FaDownload } from 'react-icons/fa';


const Cv=()=>{
return(
<div>
<a href={something} className={classes.cvbutton} download><FaDownload/>GET RESUME</a>
</div>

)

;
}

export default Cv;
