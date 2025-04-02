import React, { useState } from 'react'
import shortid from 'shortid'
export default function TodoForm({addTodo}) {

    const [Text, saveText] = useState('')

  const HandelSubmit=(e)=>{
    e.preventDefault();
    if(Text.trim()==='')
      return;

    const newTask={
      id:shortid.generate(),
      Task: Text,
      complete:false
    }
    addTodo(newTask);
    saveText('');
    console.log(newTask)
  }

    

  return (
    <>
      <form className='text-center' onSubmit={HandelSubmit} >

        <label className='mt-5'>My Task </label>

        <input className='rounded-2 ms-3  shadow'
        type="text" value={Text} onChange={(e)=>saveText(e.target.value)}/>

        <button onSubmit={HandelSubmit}  className='btn btn-info ms-3 shadow' >
          Add
        </button>
      </form>
    </>
  )
}
