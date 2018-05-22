// @flow
import React from 'react'

const InputToDo = ({onChange, onKeyPress, input}:{onChange: Function, onKeyPress: Function, input: string}) => {
    return (
        <div>
            <label htmlFor="addTodo">Please input the todo item to add: </label>
            <input type="text" name="addTodo" placeholder="what to do?" value={input}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default InputToDo