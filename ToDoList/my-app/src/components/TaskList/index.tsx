import styles from './taskList.module.scss'

interface TaskListProps {
  isDone?: boolean
}

export default function TaskList(props: TaskListProps) {
  const { isDone } = props
  return (
    <div className={styles.TaskList}>
      <h2 className={styles.TaskListTll}>{isDone ? 'Hoan Thanh' : 'Chua Hoan Thanh'}</h2>
      <div className={styles.List}>
        <div className={styles.ListItem}>
          <input type='checkbox' name='' className={styles.ListCheckBox} />
          <span className={`${styles.ListContent} ${isDone ? styles.ListContentDone : ''} `}>Hoc tap</span>
          <div className={styles.ListBtn}>
            <button>🖋</button>
            <button>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}
