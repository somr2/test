import React from 'react'

const InputMessage = ({onChange}) => {
    return (
        <div>
            <input type="text" onChange={onChange}/>
        </div>
    )
}

export default InputMessage