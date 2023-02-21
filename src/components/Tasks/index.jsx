import React, { useEffect, useState } from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './tasks.module.css'

import {BsFillCheckCircleFill} from 'react-icons/bs'
import {TbTrash} from 'react-icons/tb'
import {AiFillEdit} from 'react-icons/ai'
import ModalDelete from "../ModalDelete/index"
import ModalEdit from '../ModalEdit'

const Tasks = () => {
    const {todoList, taskCount, taskCompletedCount, setTodoListToLocalStorage, showModalDelete, setShowModalDelete, showModalEdit, 
        setShowModalEdit} = useTodoContext();
    const [currentId, setCurrentId] = useState(null);
    const [currentName, setCurrentName] = useState('');
  
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
        setShowModalDelete(false);
    }    

    const handleEdit = (taskId, newTaskName) => {
        const newTodoList = todoList.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    name: newTaskName,
                }
            }
            return task;
        })

        setTodoListToLocalStorage(newTodoList);
        setShowModalEdit(false);
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
                    <AiFillEdit onClick={() => {
                        setShowModalEdit(true);
                        setCurrentId(task.id)
                        setCurrentName(task.name);
                    }}/>
                </div>

                <div className={styles.deleted}>
                    <TbTrash onClick={() => {
                        setShowModalDelete(true);
                        // handleDelete(task.id)
                        setCurrentId(task.id);
                    }}/>
                </div>
            </div>
            
        </div>
        ))}
        {showModalDelete && (
            <ModalDelete onDelete={handleDelete} currentId={currentId}/> 
        )
        }
        {
            showModalEdit && (
                <ModalEdit onEdit={handleEdit} currentId={currentId} currentName={currentName}/>
            )
        }
        
    </main>
  )
}

export default Tasks