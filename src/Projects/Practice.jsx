import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
const CS= () =>{ 
    return <h1> This i cs branch</h1>;
}
const IT= () =>{
    return <h1> This i it branch</h1>;
}
const Entc= () =>{
    return <h1> This i ents branch</h1>;
}
const Mechanical= () =>{
    return <h1> This i Mechanical branch</h1>;
}
const Elec= () =>{
    return <h1> This i cs branch</h1>;
}
const civil= () =>{
    return <h1> This i civil branch</h1>;
}
const styles = {
    marginRight : '10px'
  };
  const active = {
    fontWeight:'large',
    backgroundColor:"yellow"
  };
const Menu=()=>{
    return(<>
        <ul>
        <NavLink style={styles} activeClassName={active} to={"/"}>cs</NavLink>
        <NavLink style={styles} activeClassName={active} to={"/it"}>it</NavLink>
        <NavLink style={styles} activeClassName={active} to={"/entc"}>entc</NavLink>
        <NavLink style={styles} activeClassName={active} to={"/mech"}>mech</NavLink>
        <NavLink style={styles} activeClassName={active} to={"/"}/>
        </ul>
    </>)
}
const Practice =()=>{
    return(<>
    <div>
        <Menu/>
        <h1>This is home page which include different Branches:- </h1>
        <br />
        <Routes>
            <Route exact path="/" Component={CS}/>
            <Route exact path="/it" Component={IT}/>
            <Route exact path="/entc" Component={Entc}/>
            <Route exact path="/mech" Component={Mechanical}/>
            <Route Component={CS}/>
        </Routes>
    </div>
    </>);
} 
export default Practice;