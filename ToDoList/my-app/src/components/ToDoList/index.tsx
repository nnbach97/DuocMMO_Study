import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'

export default function ToDoList() {
  return (
    <div className={styles.ToDoList}>
      <div className={styles.ToDoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList isDone={true} />
      </div>
    </div>
  )
}
