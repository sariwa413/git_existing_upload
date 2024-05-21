import React from "react";
import UserDesigner from "../designers/UserDesigner";
import AddButton from "../designers/AddButton";
import useAxios from "axios-hooks";
import AddUserDialog from "../designers/Dialogs/AddUserDialog";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../users/userApiSlice";
import PrivateRoute from "../auth/PrivateRoute";
import NavBar_Caller from "../designers/NavBar_Caller";
import DecodeToken from "../auth/decodeToken";
const UsersPage = ()=>{
 
  const {CheckToken} = PrivateRoute()
  CheckToken()
 
  const {data: users , isError, isLoading, error} =  useGetUsersQuery()
if(DecodeToken().roles!="admin"){
  return(
    <p>you are not alowed here</p>
  )
}
    return(
        <div>
          <NavBar_Caller/>
             <AddButton p={'Users'} />
             { (users? users.map(user=><UserDesigner user={user}/>):<p>No users in DB</p> )}
        </div>
    )
};

export default UsersPage;






