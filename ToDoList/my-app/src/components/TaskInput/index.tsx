import { useState } from 'react'
import styles from './taskInput.module.scss'
import { ToDo } from '../../@types/todo.type'

interface TaskInputProps {
  addTodo: (name: string) => void
  saveTodo: (name: string) => void
  editTodo: (name: string) => void
  currentTodo: ToDo | null
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, saveTodo, editTodo, currentTodo } = props
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentTodo) {
      saveTodo(currentTodo.name)
    } else {
      if (name.trim() !== '') {
        addTodo(name)
      } else {
        alert('Moi nhap ')
      }
    }
    setName('')
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }
  return (
    <div>
      <h1 className={styles.ttl}>To Do List Work</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          name='txt'
          placeholder='Enter work'
          className={styles.formInput}
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeName}
        />
        <button type='submit' className={styles.formBtn}>
          {currentTodo ? '✔' : '➕'}
        </button>
      </form>
    </div>
  )
}
