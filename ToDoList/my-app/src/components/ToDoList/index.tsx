import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'
import { ToDo } from '../../@types/todo.type'

export default function ToDoList() {
  const [todos, settodos] = useState<ToDo[]>([])
  const listDoned = todos.filter((item) => item.done === true)
  const listNotDone = todos.filter((item) => item.done === false)

  const addTodo = (name: string) => {
    console.log(name)

    const todo: ToDo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    settodos((prev) => [...prev, todo])
  }

  const checkDone = (id: string, done: boolean) => {
    const data = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done }
      }

      return item
    })

    settodos((prev) => data)
  }

  const deleteTodo = (id: string) => {
    const data = todos.filter((item) => item.id !== id)

    settodos(data)
  }

  const editTodo = (item: ToDo) => {
    const { name, id, done } = item
    settodos((prev) => [...prev, { name, id, done }])
  }

  return (
    <div className={styles.ToDoList}>
      <div className={styles.ToDoListContainer}>
        <TaskInput addTodo={addTodo} editTodo={editTodo} />
        <TaskList listData={listNotDone} checkDone={checkDone} deleteTodo={deleteTodo} />
        <TaskList isDone={true} listData={listDoned} checkDone={checkDone} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}
