import React from "react";
import NavBar from "../designers/NavBar";
import AddButton from "../designers/AddButton";
import PrivateRoute from "../auth/PrivateRoute";
import NavBar_Caller from "../designers/NavBar_Caller";
 const HomePage = ()=>{
  const {CheckToken} = PrivateRoute()
  CheckToken()
    return(
      <>
      <NavBar_Caller/>
  <div>homePage</div>
 
      </>
      );
    
 };
 export default HomePage