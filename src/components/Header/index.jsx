import React, { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useTodoContext } from '../../contexts/ContextProvider'

import styles from './header.module.css'


const Header = () => {
    const {todoList, setTodoList} = useTodoContext();
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodoList([...todoList, {
            id: crypto.randomUUID(),
            name: inputValue,
            isCompleted: false,
        }])

        setInputValue('');
    } 

    return (
    <header className={styles.header}>
        <h1>TODO APP</h1>

        <form className={styles.form}>
            <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='New Task...' value={inputValue}/>
            <button onClick={(e) => handleSubmit(e)} type='submit' disabled={!inputValue}>
                <AiFillPlusCircle size={29} style={{ color: '#f3f3f3' }}/>
            </button>
        </form>
    </header>
  )
}

export default Header