
// dispatch(apiSlice.util.resetApiState())
import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { removeToken } from "./authSlice"
import apiSlice from "../app/apiSlice"
const LogOut = () => {
// const {isUserLoggedIn} = useSelector((state)=>state.auth)
 const dispatch = useDispatch()
const navigate = useNavigate()
const handleLogoutClick = () =>{
dispatch(removeToken())
// dispatch(apiSlice.util.resetApiState())
navigate("/")
}
return (
<button onClick={handleLogoutClick}>
  Logout 
</button>
)
}
export default LogOut;