import React from 'react'
import ToDoList from '../ToDoList'
import InputToDo from '../InputToDo'

const ToDo = ({input, tasks, onChange, onKeyPress, onClick}) => {
  return (
    <div>
      <InputToDo onChange={onChange} onKeyPress={onKeyPress} input={input}/>
      <ToDoList tasks={tasks} onClick={onClick} />
    </div>
  )
}

export default ToDo
