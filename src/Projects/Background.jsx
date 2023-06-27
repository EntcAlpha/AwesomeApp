import React, { useState } from "react"; 
import "../Styling/Background.css"


const Background = () =>{
    const clr = 'red';
    const [bg,changeColor] = useState(clr);
    const [name,changename] = useState("red");
    // const [color,changeColor] = useState('#ffff'); 
    const bgc=()=>{
        if(name==='red'){
            let newclr = 'black';
            changeColor(newclr);
            changename("black");
        }else{
            let newclr = 'red';
            changeColor(newclr);
            changename("red");
        }
    };    
    return(<>
    <div style={{backgroundColor : bg}}>
      <button onClick={bgc}>{name}</button>
    </div>
    </>);
}

export default Background;