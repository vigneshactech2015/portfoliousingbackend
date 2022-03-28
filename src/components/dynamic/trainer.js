import React,{useState,useEffect,useCallback} from "react";
import View from "./View";
import "./trainer.css";
import AddTrainer from "./Addtrainer";
  const Trainer=()=>{
    const[trainersList,setTrainersList]=useState([]);
    const [error,setError]=useState(null);

    const fetchTrainersHandler=useCallback(async()=>{ 
        
          setError(null);
      
          try{
            const response=await fetch('http://localhost:3000/skills');
            if(!response.ok){
              throw new Error('Something went wrong!');
            }
            const data=await response.json();
      
            const loadedTrainers=[];
      
            for(const key in data){
              loadedTrainers.push({
                id:data[key].id,
                name:data[key].name,
              });
            }
        
          
            setTrainersList(loadedTrainers);
              } catch(error){
                setError(error.message);
              }
          },[]);
    
          useEffect(()=>{
            fetchTrainersHandler();
          },[fetchTrainersHandler]
          );


          async function addTrainerHandler(name){
            const response=await fetch('http://localhost:3000/skills',{
              method:'POST',
              body:JSON.stringify(name),
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            fetchTrainersHandler(data);
          }


          async function deleteTrainerHandler(id){
            const response = await fetch(`${'http://localhost:3000/skills/'}${id}`,{
              method:'DELETE',
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            
            return fetchTrainersHandler(data);
            }
 

    
    


return(
    <div>
    <h2 className="addskills">Add Skills</h2>
        <AddTrainer onAddTrainer={addTrainerHandler}/>
        
                <section>
        {trainersList.length>0&&<View trainers={trainersList} onDeleteTrainer={deleteTrainerHandler} />}
        {trainersList.length===0 && !error && <p>Found no trainer.</p>}
        </section>
    </div>
)
};

export default Trainer;