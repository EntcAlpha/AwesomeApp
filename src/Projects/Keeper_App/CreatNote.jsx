import React, { useEffect, useState } from "react";
import Note from "./Note";
import axios from "../Remainder_App/Axios";

const CreateNote=()=>{
    const [notesArray,setNotesArray] = useState([]);
    const getData=async()=>{
        try{
           const response = await axios.get("/notes");
            setNotesArray(response.data);
        }catch(error){
            console.log("Error:",error)
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    const[note,setTitle] = useState({
        id:"",
        title:"",
        text:""
    });
    const[isExpand,setIsExpand] = useState({
        expand:"",
        number:1
    });
    const handleInputClick = (e) => { 
        setIsExpand(
            {
                expand:"true",
                number:3
            }
        );
        let name = e.target.name;
        let value = e.target.value;
        setTitle((p)=>{
            if(name === "title"){
                return({
                    ...p,
                    [name] : value
                })
            }else{
                return({
                    ...p,
                    [name] : value
                })
            }
        });
    }; 
    const addNote=async(e)=>{
        e.preventDefault();
        setTitle((p)=>{
            const temp = notesArray.length+1;
            return{
                ...p,
                ["id"] : temp 
            }
        });
        try{
             const response = await axios.post("/notes",note);
             getData(response.data);
         }catch(error){
             console.log("Error:",error)
         }
    }
    const deleteNote=async(id)=>{
        try{
            const response = await axios.delete(`/notes/${id}`);
            getData(response.data);
        }catch(error){
            console.log("Error:",error)
        }
    }
    
    return(<>
        <div>
            <form onSubmit={addNote}>
                {isExpand.expand && <input placeholder="Title" name="title" onChange={handleInputClick} value={note.title}/>}
                <textarea placeholder="Take a note..." rows={isExpand.number} name="text" onChange={handleInputClick} onClick={handleInputClick} value={note.text}/>
                <button type="submit">➕</button>
            </form>
        </div>  
        {
            notesArray.map((note,index)=>{
               return <Note key={index} id={index} {...note} onDelete={deleteNote}/> 
            })
        }
    </>);
} 

export default CreateNote;

