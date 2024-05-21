import React from "react";
import PhotoDesigner from "../designers/PhotoDesigner";
import AddButton from "../designers/AddButton";
import useAxios from "axios-hooks";
import AddPhotoDialog from "../designers/Dialogs/AddPhotoDialog";
import { useSelector } from "react-redux";
import { useGetPhotosQuery } from "../photos/photosApiSlice";
import PrivateRoute from "../auth/PrivateRoute";
import NavBar_Caller from "../designers/NavBar_Caller";
const UsersPage = ()=>{
  const {CheckToken} = PrivateRoute()
  CheckToken()
  const {data: photos , isError, isLoading, error} =  useGetPhotosQuery()
  
   
    return(
        <div>
          <NavBar_Caller/>
             <AddButton p={'Photos'} />
             { (photos? photos.map(photo=><PhotoDesigner photo={photo}/>):<p>No photos in DB</p> )}
        </div>
    )
};

export default UsersPage;






