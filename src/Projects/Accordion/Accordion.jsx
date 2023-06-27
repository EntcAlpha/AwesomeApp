import React, { useState } from "react";
import Data from "./Data";
import AccoComp from "./AccoComp";
import "./Accordion.css";

const Accordion = () => {
  const[data,setData] = useState(Data);
  // console.log(data);
  return (
    <>
      <section className="main-div">
        <div><h1>React Interviwe Questions</h1> </div>
         {
            data.map((curElem)=>{
              const {id} = curElem;
              return <AccoComp key={id} {...curElem}/>
            }
            )
         }
         {/* {items.map((item,index) => (
                  <AccoComp 
                   key={index} 
                   text={item}
                   id={index} 
                   onSelect={()=>{deleteItem(index)}}
                   />
                  ))} */}
      </section>
    </>
  );
};

export default Accordion;
