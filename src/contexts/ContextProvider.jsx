import {createContext, useState, useContext} from 'react'

const TodoContext = createContext();

export const ContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);
    
    return <TodoContext.Provider
        value={{ 
            todoList,
            setTodoList
         }}
    >
        {children}
    </TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);