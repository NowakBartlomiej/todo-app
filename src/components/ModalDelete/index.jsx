import React from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './ModalDelete.module.css'

const ModalDelete = ({onDelete, currentId}) => {
  const {setShowModalDelete} = useTodoContext();
  
  return (
    <dialog onClick={() => setShowModalDelete(false)} className={styles.ModalDelete}>
        <div className={styles.box}>
            <p>Do you want to delete this task?</p>

            <div className={styles.buttons}>
                <button onClick={() => onDelete(currentId)} className={`${styles.btn} ${styles.yes}`}>Yes</button>
                <button onClick={() => setShowModalDelete(false)} className={`${styles.btn} ${styles.no}`}>No</button>
            </div>
        </div>
    </dialog>
  )
}

export default ModalDelete