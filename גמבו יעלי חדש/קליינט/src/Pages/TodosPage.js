import React from "react";
import TodoDesigner from "../designers/TodoDesigner";
import AddButton from "../designers/AddButton";
import useAxios from "axios-hooks";
import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../todos/todosApiSlice";
import PrivateRoute from "../auth/PrivateRoute";
import NavBar_Caller from "../designers/NavBar_Caller";
const TodosPage = ()=>{
  const {CheckToken} = PrivateRoute()
  CheckToken()
  const {data: todos , isError, isLoading, error} =  useGetTodosQuery()
  console.log("todos:", todos);

    return(
        <div>
          <NavBar_Caller/>
             <AddButton p = {'Todos'}/>
             { (todos? todos.map(todo=><TodoDesigner todo={todo}/>):<p>No todos in DB</p> )}
        </div>
    )
};

export default TodosPage;






