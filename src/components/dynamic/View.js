import React from "react";
import{Link} from 'react-router-dom';
import './view.css';
import { BsTrashFill } from "react-icons/bs";
const View =({trainers,onDeleteTrainer,})=>{
return(
    <React.Fragment>
   
    <table className='table'>
        <tbody>
<tr>
<th>S.No</th>
<th>Skills</th>
<th>Delete</th>
</tr>

{trainers.map((trainer,index)=>

{ 
    return(
<tr key={trainer.id}>
    <td>{index+1}</td>
    <td>{trainer.name}</td>
    <td><button onClick={()=>onDeleteTrainer(trainer.id)}><BsTrashFill/></button></td>
</tr>)
})}
</tbody>
    </table>
    </React.Fragment>
)
}

export default View;