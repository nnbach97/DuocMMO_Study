import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'
import { ToDo } from '../../@types/todo.type'

export default function ToDoList() {
  const [todos, settodos] = useState<ToDo[]>([])
  const listDoned = todos.filter((item) => item.done === true)
  const listNotDone = todos.filter((item) => item.done === false)
  const [currentTodo, setCurrentTodo] = useState<ToDo | null>(null)

  useEffect(() => {
    const db = localStorage.getItem('todolist') || '[]'
    settodos(JSON.parse(db))
  }, [])

  const handleLocalStorage = (data: ToDo[]) => {
    localStorage.setItem('todolist', JSON.stringify(data))
  }

  const addTodo = (name: string) => {
    const todo: ToDo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    settodos((prev) => [...prev, todo])
    handleLocalStorage([...todos, todo])
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
    // c1
    const data = todos.filter((item) => item.id !== id)
    settodos(data)

    //c2
    //   const data = todos.findIndex((item) => item.id === id)
    //   let list: any = []
    //   if (data > -1) {
    //     const db = [...todos]
    //     db.splice(data, 1)
    //     list = [...db]
    //   }
    //   settodos(list)

    // localStorage.setItem('todolist', JSON.stringify([...todos, data]))
    handleLocalStorage(data)
  }

  const clickBtnEdit = (id: string) => {
    const itemId = todos.find((item) => item.id === id)
    if (itemId) setCurrentTodo(itemId)
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }

  const saveTodo = (name: string) => {
    const listNew = todos.map((item) => {
      if (item.id === (currentTodo as ToDo).id) {
        return currentTodo
      }

      return item
    })

    settodos(listNew as ToDo[])
    setCurrentTodo(null)
    handleLocalStorage(listNew as ToDo[])
  }

  return (
    <div className={styles.ToDoList}>
      <div className={styles.ToDoListContainer}>
        <TaskInput addTodo={addTodo} editTodo={editTodo} saveTodo={saveTodo} currentTodo={currentTodo} />
        <TaskList listData={listNotDone} checkDone={checkDone} deleteTodo={deleteTodo} clickBtnEdit={clickBtnEdit} />
        <TaskList
          isDone={true}
          listData={listDoned}
          checkDone={checkDone}
          deleteTodo={deleteTodo}
          clickBtnEdit={clickBtnEdit}
        />
      </div>
    </div>
  )
}
