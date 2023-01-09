import React, { useState  } from "react";
import { data }  from "../data/tasks";

const todoContext = React.createContext({})

export const TodoContextProvider = ({ children }) =>
{
    const [todos, setTodos] = useState( data )

    return <todoContext.Provider value={ {todos, setTodos }}>
        { children } 
    </todoContext.Provider>
}


export default todoContext;
