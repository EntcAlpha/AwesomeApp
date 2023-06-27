import React, { useState } from 'react'; 
import "../Styling/Todo.css"
import ToDoList from './ToDoList';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
const App = () => {

    const [items, setItems] = useState(["vaibhav","anil"]);
    const [item,insertItem] = useState("");


    const handleAddItem = (e) =>{
        setItems((oldItems)=>{
            return [...oldItems,item];
        });
        insertItem("");
    }
    const inputChange=(e)=>{
        insertItem(e.target.value);
    } 
    const deleteItem=(index)=>{
       console.log(items); 
      const updatedItems = items.filter((item,id)=>{return id !== index });
      setItems(updatedItems);
    }
  
    return (
      <>
          <div className="main_div">
            <div className="center__div">
              <br />
              <h1>ToDo List</h1>
              <br />
              <input type="text"  placeholder="Add a Item" onChange={inputChange} value={item}/>

              <button type="submit" onClick={handleAddItem}> 
                <Tooltip title="Add"><Icon><AddIcon/></Icon></Tooltip>
              </button>
              {/* <Icon></Icon> */}
    
              <ol>
                 {items.map((item,index) => (
                  <ToDoList 
                   key={index} 
                   text={item}
                   id={index} 
                   onSelect={()=>{deleteItem(index)}}
                   />
                  ))}
              </ol> 
            </div>
          </div>
      </>
    );
};

export default App;













