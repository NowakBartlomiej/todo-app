import React, { useState } from 'react'
import { useTodoContext } from '../../contexts/ContextProvider'
import styles from './modalEdit.module.css'

const ModalEdit = ({onEdit, currentId, currentName}) => {
  const {setShowModalEdit} = useTodoContext();
  const [editValue, setEditValue] = useState(currentName);

  return (
    <dialog className={styles.ModalEdit}>
      <div className={styles.box}>
        <p>Edit Task</p>
        <input onChange={(e) => setEditValue(e.target.value)} className={styles.inputEdit} type="text" value={editValue}/>
        <div className={styles.buttons}>
          <button onClick={() => {
            onEdit(currentId, editValue);
          }} className={`${styles.btn} ${styles.save}`}>Save</button>
          <button onClick={() => setShowModalEdit(false)} className={`${styles.btn} ${styles.cancel}`}>Cancel</button>
        </div>
      </div>
    </dialog>
  )
}

export default ModalEdit