import { useContext } from "react";
import todoContext  from "../context/todoContext";

export const Button = ({ text, color, hover, ButtonFunction, id }) => {
  const  { todos, setTodos }  = useContext(todoContext) 

  const deleteTodo = (id) => 
  {
    setTodos(todos.filter((todo) => todo.id !== id))
  } 

  const addTodo = () => 
  {
    
  } 
  return (
    <button
      className= {`${color} ${hover} text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none`} 
      alt="Add Todo"
      onClick={
     ButtonFunction == "delete"?   
        () => deleteTodo(id) : addTodo()}>
      {text}
    </button>
  );
};
