import styles from './taskInput.module.scss'

export default function TaskInput() {
  return (
    <div>
      <h1 className={styles.ttl}>To Do List Work</h1>
      <form className={styles.form}>
        <input type='text' name='txt' placeholder='Enter work' className={styles.formInput} />
        <button type='submit' className={styles.formBtn}>
          ➕
        </button>
      </form>
    </div>
  )
}
