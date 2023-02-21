import React, { useEffect, useState } from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './tasks.module.css'

import {BsFillCheckCircleFill} from 'react-icons/bs'
import {TbTrash} from 'react-icons/tb'
import {AiFillEdit} from 'react-icons/ai'
import Modal from "../Modal/index"

const Tasks = () => {
    const {todoList, taskCount, taskCompletedCount, setTodoListToLocalStorage, showModal, setShowModal} = useTodoContext();
    const [currentId, setCurrentId] = useState(null);
  
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

        setTodoListToLocalStorage(newTodoList);
    }
    
    const handleDelete = (taskId) => {
        const newTodoList = todoList.filter(task => {
            if (task.id !== taskId) {
                return task
            }
        })

        setTodoListToLocalStorage(newTodoList);
        setShowModal(false);
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

            <div className={styles.actions}>
                <div className={styles.edit}>
                    <AiFillEdit/>
                </div>

                <div className={styles.deleted}>
                    <TbTrash onClick={() => {
                        setShowModal(true);
                        // handleDelete(task.id)
                        setCurrentId(task.id);
                    }}/>
                </div>
            </div>
            
        </div>
        ))}
        {showModal && (
            <Modal onDelete={handleDelete} currentId={currentId}/> 
        )
        }
    
    </main>
  )
}

export default Tasks