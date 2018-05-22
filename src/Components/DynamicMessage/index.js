import React from 'react'
import Message from '../Message'
import InputMessage from '../InputMessage'

export default ({onChange, message}) => {
  return (
    <div>
      <InputMessage onChange={onChange}/>
      <Message message={message}/>
    </div>
  )
}
