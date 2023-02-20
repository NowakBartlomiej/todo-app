import React, { useEffect } from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './tasks.module.css'

import {BsFillCheckCircleFill} from 'react-icons/bs'
import {TbTrash} from 'react-icons/tb'

const Tasks = () => {
    const {todoList, setTodoList, taskCount, taskCompletedCount} = useTodoContext();
  
    const handleComplete = (taskId) => {
        const newTodoList = todoList.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task;
        })

        setTodoList(newTodoList);
    }
    
    const handleDelete = (taskId) => {
        const newTodoList = todoList.filter(task => {
            if (task.id !== taskId) {
                return task
            }
        })

        setTodoList(newTodoList);
    }    


    return (
    <main className={styles.main}>
        { taskCount != 0 &&
            <div className={styles.stats}>
                <div>
                    <p>Created Tasks: <span>{taskCount}</span></p>
                </div>

                <div>
                    <p>Completed: <span>{taskCompletedCount} / {taskCount}</span></p>
                </div>
            </div>
        }

        {todoList.map((task) => (
        <div key={task.id} className={styles.task}>
            <button 
            onClick={() => handleComplete(task.id)}
            className={styles.checkContainer}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ''}>{task.name}</p>

            <div className={styles.deleted}>
                <TbTrash onClick={() => handleDelete(task.id)}/>
            </div>
        </div>
        ))}
        

    </main>
  )
}

export default Tasks