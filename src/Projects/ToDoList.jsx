import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
const ToDoList = (props) => { 
  console.log(props);
  return (
    <>
      <div className="todo__style">
      {/* <i class="fa fa-times-circle" aria-hidden="true"></i> */}
        <Tooltip title="Delete">
           <DeleteIcon className="fa fa-times" aria-hidden="true" onClick={props.onSelect}/>
        </Tooltip>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;