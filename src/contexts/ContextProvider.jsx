import {createContext, useState, useContext} from 'react'

const TodoContext = createContext();

export const ContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);

    const taskCount = todoList.length;
    const taskCompletedCount = todoList.filter(task => task.isCompleted == true).length;
    
    return <TodoContext.Provider
        value={{ 
            todoList,
            setTodoList,
            taskCount,
            taskCompletedCount,
         }}
    >
        {children}
    </TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);