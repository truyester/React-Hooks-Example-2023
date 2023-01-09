import { useContext } from "react";
import { Button } from "./Button";
import todoContext from "../context/todoContext";

export const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between m-5 bg-gray-400 rounded">
      <div className="flex flex-col">
        <h3 className="text-lg text-black  m-1">{todo.name}</h3>
        <p className="text-base text-black  m-2">{todo.description}</p>
      </div>
      <div className="grid place-items-center rounded">
          <Button id = { todo.id } ButtonFunction={"delete"} hover={"hover:bg-red-600"} color={"bg-red-700"} text={"Borrar"} /> 
      </div>
    </div>
  );
};
