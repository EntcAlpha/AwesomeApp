// import { Title } from "@material-ui/icons";
import React from "react";
const Reminder=(props)=>{
  const { id, reminder, date, time, onDelete } = props;

  return (
    <div className="reminder-wrapper">
      <div className="reminder-container">
        <div className="reminder-id">{id}</div>
        <div className="reminder">{reminder}</div>
        <div className="reminder-time">{date}</div>
        <div className="reminder-time">{time}</div>
      </div>
      <span className="reminder-remove" onClick={()=>onDelete(id)}>
        ❌
      </span>
    </div>
  );
}
export default Reminder;