import React from 'react'
import { useState, useContext } from 'react';
import todoContext from '../context/todoContext';

export const TodoForm = () => {
    const { todos, setTodos } = useContext(todoContext);
    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      
      const newTodo = {
        id: todos.length + 1,
        name: todoName,
        description: todoDescription
      };
      setTodos([...todos, newTodo]);
      setTodoName("");
      setTodoDescription("");
    };
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
    <label className="px-5">Titulo</label>
    <input
      type={"text"}
      placeholder="Titulo"
      value={todoName}
      className="m-2 p-3 text-base text-black rounded-md"
      onChange={(e) => setTodoName(e.target.value)}
    />
    <label className="px-5">Descripción</label>
    <input
      type={"text"}
      placeholder="Descripción"
      value={todoDescription}
      className="m-2 p-3 text-base text-black rounded-md" 
      onChange={(e) => setTodoDescription(e.target.value)}
    />
    <div className="flex">
    <input
        type={"submit"}
        value="Guardar"
        className="bg-green-700 items-center justify-center text-white w-full m-2 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
    </div>
  </form>
  )
}

