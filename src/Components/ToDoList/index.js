// @flow
import React from 'react'

const ToDoItem = ({tasks, onClick}:{task:string, onClick: Function}) => {
    return (
        <ul>
            { 
                tasks.map( (task,i) => (
                    <li key={i} onClick={() => onClick(i)}>
                        {task}
                    </li> ) 
                )
            }
        </ul>
    )
}

export default ToDoItem