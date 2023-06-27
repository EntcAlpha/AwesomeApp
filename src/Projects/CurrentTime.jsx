import React, { useState } from "react"; 
import "../Styling/CurrentTime.css"


const CurrentTime = () =>{

    const [currTime , setTime] = useState(new Date().toLocaleTimeString()); 

    const GetTime = () =>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(GetTime,1000);
    return(<>
        <h1>{currTime}</h1>
        <button onClick={GetTime}>Get Time</button>
        <button onClick={GetTime}>Get Time</button>
    </>);
}

export default CurrentTime; 

