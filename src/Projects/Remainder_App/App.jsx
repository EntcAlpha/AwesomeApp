import React, { useState, useEffect } from "react";
import { axios } from "./Axios";
import "./Reminder_App.css"
import Reminder from "./Reminder";
// import { Try } from "@mui/icons-material";
const App =()=>{ 
  const [reminders,setReminders] = useState([]); 
  const [form,setFrom] = useState({
    id:"",
    reminder:"",
    date:"",
    time:""
  });
  const [finalForm,finalSetFrom] = useState({
    id:"",
    reminder:"",
    date:"",
    time:""
  });
  const noReminder = !reminders || (reminders && reminders.length === 0);
  const getReminder = async () => {
    try{
      const response = await axios.get("/reminders");
      setReminders(response.data)
    }catch(error){
      console.log("Error:",error)
      // setIsError(error.message);
    } 
  }  
  useEffect(()=>{
    getReminder();
  },[]); 
  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFrom((p)=>{
      if(name === "id"){
        return{
          ...p,
          [name]: value
        }
      }else if(name === "reminder"){
        return{
          ...p,
          [name]: value
        }
      }else if(name === "date"){
        return{
          ...p,
          [name]: value
        }
      }else if(name === "time"){
        return{
          ...p,
          [name]: value
        }
      }
    })
  }
  const addReminder = async() =>{
    // finalSetFrom(form);
    try{
      const response = await axios.post("/reminders",form);
      setReminders(response.data)
    }catch(error){
      console.log("Error:",error)
      // setIsError(error.message);
    } 

  }
  const deleteReminder = async(id) => {
    try{
      const response = await axios.delete(`/reminders/${id}`);
      getReminder(response.data);
    }catch(error){
      console.log("Error:",error)
      // setIsError(error.message);
    }
  }

  return (
    <div className="App">
      <h3>Reminders</h3>
      {noReminder && <h2>No reminder is here</h2>}
      {!noReminder &&
        reminders.map((reminder, idx) => (
          <Reminder key={idx} {...reminder} onDelete={deleteReminder}/>
        ))}
      <br />
      <h3>Add Reminder</h3>
      <form onSubmit={addReminder}>
        <label htmlFor="id">Id</label> 
        <input name="id" placeholder="Id" required value={form.id} onChange={handleChange}/> 
        <label htmlFor="reminder">Name</label>
        <input name="reminder" placeholder="Name" required value={form.reminder} onChange={handleChange}/>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required value={form.date} onChange={handleChange}/>
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" required value={form.time} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;