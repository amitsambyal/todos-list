import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
    // Check if todos is null
  if (props.todos === null) {
    return <p>Loading...</p>; // or any other loading state
  }

  return (
    <div className="container">
      <h2 className="text-center my-3">{props.title}</h2>  
      {props.todos.length===0?"No todos available": props.todos.map((todo)=>{
          return  (
          <>
          <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          <hr/>
          </>
          )
        })}                    
           
    </div>
  )
}

export default Todos
