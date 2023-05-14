import { ToDo } from '../../@types/todo.type'
import styles from './taskList.module.scss'

interface TaskListProps {
  isDone?: boolean
  listData: ToDo[]
  checkDone: (id: string, done: boolean) => void
  deleteTodo: (id: string) => void
  clickBtnEdit: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { isDone, listData, checkDone, deleteTodo, clickBtnEdit } = props

  const handleCheckDone = (item: ToDo) => {
    checkDone(item.id, !item.done)
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }

  const handleEdit = (id: string) => {
    clickBtnEdit(id)
  }

  return (
    <div className={styles.TaskList}>
      <h2 className={styles.TaskListTll}>{isDone ? 'Hoan Thanh' : 'Chua Hoan Thanh'}</h2>
      <div className={styles.List}>
        {listData.map((item) => (
          <div className={styles.ListItem} key={item.id}>
            <input
              type='checkbox'
              name=''
              className={styles.ListCheckBox}
              checked={item.done}
              onChange={() => handleCheckDone(item)}
            />
            <span className={`${styles.ListContent} ${item.done ? styles.ListContentDone : ''} `}>{item.name}</span>
            <div className={styles.ListBtn}>
              <button onClick={() => handleEdit(item.id)}>🖋</button>
              <button onClick={() => handleDelete(item.id)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
