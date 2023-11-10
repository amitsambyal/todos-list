import React from 'react'

const TodoItems = ({todo,onDelete}) => {
  return (
   <div className="container my-3">
    <h3>{todo.title}</h3>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
   </div>
  )
}

export default TodoItems
