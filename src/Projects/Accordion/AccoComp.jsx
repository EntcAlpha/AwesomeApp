import React,{ useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AccoComp = ({question,answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  const callFun = () =>{
    setIsOpen(!isOpen);
  }
    return (
        <>
          <div className="main-heading" onClick={callFun}>
             {isOpen?<p>➖</p>:<p>➕</p> }
              <h3>{question}</h3>
          </div> 
          { isOpen && <p className="answers">{answer}</p>}
        </>
      );
};

export default AccoComp;
