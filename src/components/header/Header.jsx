import React from "react";
import classes from './header.module.css';
import{Link} from 'react-router-dom';
import Contactfixed from "../contact/Contactfixed";
const Header=()=>{
    return(
        
    <div className={classes.headername}>
    <Link to="/home" className={classes.align}>Home</Link><br/>
    <Link to="/skills" className={classes.align}>Skills</Link><br/>
    <Link to="/myworks" className={classes.align}>My works</Link><br/>
    <Link to="/contact" className={classes.align}>Contact</Link><br/>
    <Link to="/admin" className={classes.align}>Admin</Link><br/>
    <Contactfixed/>
    
    </div>
    
    )
}

export default Header;