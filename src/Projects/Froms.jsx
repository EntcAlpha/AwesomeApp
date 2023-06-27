import React, { useState } from 'react';
import '../Styling/Froms.css'

const Froms = () =>{

    const[detail,setDetail] = useState({
        fname:"",
        lname:"",
        email:""
    });   

    // const[finaldetail,setFinalDetail] = useState({
    //     fname:"",
    //     lname:"",
    //     email:""
    // });
    // const FinalChange =()=>{
    //     setFinalDetail({
    //         fname : detail.fname,
    //         lname : detail.lname,
    //         email : detail.email
    //     })
    // }
    const Change =(event)=>{
        let value=event.target.value;
        let name = event.target.name; 
        setDetail((p)=>{
            if(name === "fname"){
                return {
                    // fname : value,
                    // lname : p.lname,
                    // email : p.email
                    ...p,
                    [name] : value
                }
            }else if(name==="lname"){
                return {
                    // fname : p.fname,
                    // lname : value,
                    // email : p.email
                    ...p,
                    [name] : value
                }
            }else{
                return {
                    // fname : p.fname,
                    // lname : p.lname,
                    // email : value 
                    ...p,
                    [name] : value
                }
            }
        });

    }

    return(<>
       <div>
          <h1>Hello {detail.fname} {detail.lname}</h1>
          <h5>{detail.email}</h5>
          <input type="text" name="fname" placeholder='Enter your name' onChange={Change} defaultValue={detail.fname} /> 
          <input type="text" name="lname" placeholder='Enter your last name' onChange={Change} defaultValue={detail.lname} />
          <input type="email" name="email" placeholder='Enter your email' onChange={Change} defaultValue={detail.email} />
          <button type="submit" onClick={Change} >Submit</button>
       </div>
    </>);
} 
export default Froms;