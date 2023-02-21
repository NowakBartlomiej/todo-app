import {createContext, useState, useContext} from 'react'

const TodoContext = createContext();
const LOCAL_STORAGE_KEY = 'todo:list'

export const ContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const taskCount = todoList.length;
    const taskCompletedCount = todoList.filter(task => task.isCompleted == true).length;

    const loadSavedTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (saved) {
            setTodoList(JSON.parse(saved));
        }
    }

    const setTodoListToLocalStorage = (newTask) => {
        setTodoList(newTask);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
    }
    
    return <TodoContext.Provider
        value={{ 
            todoList,
            setTodoList,
            taskCount,
            taskCompletedCount,
            loadSavedTasks,
            setTodoListToLocalStorage,
            showModalDelete,
            setShowModalDelete,
            showModalEdit, 
            setShowModalEdit
         }}
    >
        {children}
    </TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);