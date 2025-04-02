import React, { useState } from 'react'
import TodoForm from './Components/TodoForm/TodoForm'
import './App.css'
import shortid from 'shortid'
import Todo from './Components/TodoForm/Todo/Todo'
export default function App() {

  let [todos, settodos] = useState([])

  const  [Task, TasksToShow] = useState('all')

  const [Update, setUpdate] = useState("")

  const [togglecompelete, setTogglecompelete] = useState(true)
  
  const UpdateTodo=()=>{
    setUpdate()
  }
  const ShowTodos=(text)=>{
    settodos([...todos,text])
  }

  const DeleteTodo=(id)=>{
    settodos(todos.filter((task)=>task.id!==id))
  }

  const ShowTask=(s)=>{
    TasksToShow(s);
  }

  if(Task==='complete'){
    todos=todos.filter((todo)=>todo.complete)
  }
  else if(Task==='active'){
    todos=todos.filter((todo)=>!todo.complete)
  }

  const ToggleTasks=(id)=>{
    settodos(
      todos.map((todo)=>{
        if(todo.id===id){
          return{
            ...todo,
            complete:!todo.complete
          }
        }
        else{
          return todo;
        }
      })
    )
  }
  
  const RemoveAllTodos=()=>{
    settodos(todos.filter((todo)=>  !todo.complete))
  }
  
  return (
    <>
    <div className='container'>
    <h2 className='text-center mt-3'>To Do List</h2>
    <TodoForm addTodo={ShowTodos} />

    <div className='text-center mt-3'>
        <button className='btn btn-info ms-2'onClick={()=>ShowTask('all')} >All</button>
        <button className='btn btn-info ms-2'onClick={()=>ShowTask('active')} >Active</button>
        <button className='btn btn-success ms-2'onClick={()=>ShowTask('complete')}>Complete</button>
    </div>
    <div className='container text-center'>
    <div className='container'>
      <div className='row'>
      {todos.map((todos,index)=>(
        <Todo todo={todos} key={index} deletetask={DeleteTodo} 
        completeTodo={(()=>ToggleTasks(todos.id))}
        update={()=>UpdateTodo(todos.Task)}/>
      ))}
    </div>
      </div>
    </div>
    </div>
    <div className='text-center mt-4'>
      {todos.some((todo)=>todo.complete)?
      <button 
      className='btn btn-danger me-3'
      onClick={RemoveAllTodos}>Remove All Complete Tasks</button> :''
}
    <button className='btn btn-danger' onClick={()=>{
      settodos(
        todos.map((todo)=>({
          ...todo,
          complete: togglecompelete
        }))
      )
      setTogglecompelete(!togglecompelete);
    }} >Toggle All Complete : {`${togglecompelete}`} </button>
    </div>
    </>
  )
}

