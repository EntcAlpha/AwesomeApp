import React, { useState } from "react"; 
import "../Styling/DigitalClock.css"


const DigitalClock = () =>{

    const [currTime , setTime] = useState(new Date().toLocaleTimeString()); 

    const GetTime = () =>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(GetTime,1);
    return(<>
        <h1>{currTime}</h1>
    </>);
}

export default DigitalClock;