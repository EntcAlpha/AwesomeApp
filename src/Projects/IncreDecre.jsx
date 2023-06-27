import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button'; 
import Tooltip from '@mui/material/Tooltip';

const IncreDecre = () =>{
    const [count,setCount] = useState(0); 

    const incre = () =>{
        setCount(count + 1);
    } 

    const decre = () =>{
        if(count > 0){
            setCount(count-1);
        }else{
            alert("Not go bellow 0");
        }
    }
    
    return(<>
         <div className="main_div">
            <div className="center__div">
              <h1>{count}</h1>
              <Tooltip title="Add">
                  <Button className="btn" onClick={incre} id="bt1"> <AddIcon/> </Button> 
              </Tooltip>
              <Tooltip title="Remove">
                 <Button className="btn" onClick={decre} id="bt2"><RemoveIcon/></Button>
              </Tooltip>
            </div> 
          </div>
    </>)
} 

export default IncreDecre;