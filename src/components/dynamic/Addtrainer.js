import React,{useState} from "react";
import classes from './addTrainer.module.css';
const AddTrainer=(props)=>{
    const[enteredTrainerName,setEnteredTrainerName]=useState('');
    const nameChangeHandler=(event)=>{
      setEnteredTrainerName(event.target.value);
    }


    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
         name:enteredTrainerName
     };
        props.onAddTrainer(tabledata);
        setEnteredTrainerName('');
     }
    

return(
    <div>
        <form className={classes.alignform} onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter Skills" className={classes.trainername} id="trainer" onChange={nameChangeHandler} value={enteredTrainerName} required></input>&nbsp;&nbsp;
        <button type="submit" className={classes.submitbutton}>+</button>&nbsp;&nbsp;
    </form>
    </div>
)
};

export default AddTrainer;