
import React from 'react'

const Input = (props) => {
  return (
    <div>
       <input onChange={props.onChange} type={props.type} />
    </div>
  )
}

export default Input

 