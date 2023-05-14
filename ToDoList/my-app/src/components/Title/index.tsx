import React from 'react'

interface PropsTypeTitle {
  nameClss: string
  value: string
}

function Title(props: PropsTypeTitle) {
  const { nameClss, value } = props

  console.log(value)

  return <h1 className={nameClss}>To Do List Work</h1>
}

function checkFunc(prev: PropsTypeTitle, next: PropsTypeTitle) {
  if (prev.value === next.value) {
    return true
  }
  return false
}

export default React.memo(Title, checkFunc)
