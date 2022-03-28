import React from "react";
import classes from './intro.module.css';
import Cv from "../components/header/Cv";
const Intro=()=>{
    return(
    <div className={classes.split}>
    <div className={classes.helloname}>
    <h3 className={classes.Hello}>Hello I'm <span className={classes.namecolor} >Vignesh</span></h3><br/><br/>
    <h5><span className={classes.front}>Front end developer</span></h5><br/><br/> <br/>
    <Cv/>
    </div>
    <div className={classes.vigimg}>
    <img className={classes.vigneshimage} src="../profileimage.gif" alt="vignesh"></img>
    </div>
    </div>
    );
}

export default Intro;