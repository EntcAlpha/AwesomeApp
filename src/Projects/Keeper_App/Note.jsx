import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Key } from "@mui/icons-material";

const Note=(props)=>{
    console.log(props);
    // const {id, title, note, onDelete} = props;
    return(<>
         <div className="note">
             <h1>{props.title}</h1>
             <p>{props.text}</p>
             <button onClick={()=>{
                props.onDelete(props.id)}}>
              <DeleteIcon />
             </button>
        </div>
    </>);
}

export default Note;