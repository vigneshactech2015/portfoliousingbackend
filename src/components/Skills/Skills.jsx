import React,{useState,useCallback,useEffect} from 'react';
import classes from './skills.module.css';

const Skills=()=> {
 const[skills,setSkills]=useState([]);

 const fetchSkillHandler = useCallback(async () => {
  try {
    const response = await fetch('http://localhost:3000/skills');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    setSkills(data);

  } catch (error) {
    console.log(error.message);
  }
}, []);

useEffect(() => {
  fetchSkillHandler();
}, []);  

  return (
    <div className={classes.skills}>
    <h2 className={classes.name}>Skills</h2>
    {skills.map((anything, key) => {
    return(
    <div className={classes.names}>
    <h5 className={classes.textname}>{anything.name}</h5>
    
    </div>

    )
    }
    )}
    </div>
  )}

export default Skills; 