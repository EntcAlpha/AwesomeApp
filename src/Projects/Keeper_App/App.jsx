import React from "react";
import Header from "./Header";
import CreateNote from "./CreatNote";
import Footer from "./Footer";
import "./App.css"

const Appkeep = ()=>{
    return(<>
     <div>
      <Header />
      <CreateNote/>
      <Footer />
     </div>
    </>);
}; 
export default Appkeep;