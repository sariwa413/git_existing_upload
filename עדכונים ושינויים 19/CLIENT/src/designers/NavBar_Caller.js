import React from "react";
import DecodeToken from "../auth/decodeToken";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import NavBarUser from "./NavBarUser";
 const NavBar_Caller = ()=>{
const Token = DecodeToken()
const navigate = useNavigate()

return(
    <>
   { Token.roles === "admin"? <NavBar/> : <NavBarUser/>}
      


    </>
)
}
export default NavBar_Caller