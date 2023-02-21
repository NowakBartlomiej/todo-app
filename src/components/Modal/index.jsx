import React from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './modal.module.css'

const Modal = ({onDelete, currentId}) => {
  const {setShowModal} = useTodoContext();
  
  return (
    <dialog className={styles.modal}>
        <div className={styles.box}>
            <p>Do you want to delete this task?</p>

            <div className={styles.buttons}>
                <button onClick={() => onDelete(currentId)} className={`${styles.btn} ${styles.yes}`}>Yes</button>
                <button onClick={() => setShowModal(false)} className={`${styles.btn} ${styles.no}`}>No</button>
            </div>
        </div>
    </dialog>
  )
}

export default Modal