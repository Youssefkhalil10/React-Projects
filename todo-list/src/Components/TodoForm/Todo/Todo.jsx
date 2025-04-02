import React from 'react'

export default function Todo({todo,deletetask,completeTodo,update}) {
  return (
    <div className='mb-2 mt-4 d-flex align-items-center justify-content-center w-100 mx-auto'>
      <input className=' form-check-input me-2' 
      type='checkbox'
      checked={todo.complete}
      onChange={()=>completeTodo(todo.id)}
      ></input>
      <span className='me-3' 
      style={{
        textDecoration: todo.complete ? 'line-through':'',
        cursor:'pointer',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
      }}
      onClick={completeTodo}>{todo.Task}</span>
      <button className='btn btn-danger me-3'
      style={{minWidth:'8px'}} onClick={()=>deletetask(todo.id)}>Delete</button>
      <button className='btn btn-secondary' onClick={()=>update(todo.Task)}>Update</button>
    </div>
  )
}
