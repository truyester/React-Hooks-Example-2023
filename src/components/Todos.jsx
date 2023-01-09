import React from 'react'
import { Todo } from './Todo'
import todoContext  from "../context/todoContext";
import { useContext } from "react";

export const Todos = () => {
const  { todos }  = useContext(todoContext)

  return (
    <div className="flex flex-col">
        {todos.length > 0 ? (
        <h2 className="px-5 text-lg">Tareas Pendientes</h2>
        ) : (
        <h2>No hay tareas pendientes</h2>
        )}
        {todos.map((todo) => (
       <Todo key={todo.id} todo={{ ...todo }} />
         ))}
  </div>
  )
}
