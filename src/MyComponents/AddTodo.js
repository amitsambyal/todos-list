import React, { useState } from 'react'

export default function AddTodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
          alert("title and Description cannot be empty")
        else
          props.addtodo(title,desc);
    }
  return (
    <div className="container my-3">
        <h3 className="text-center my-3"> Add a todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="textbox"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="form-control"
          id="title"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
      <label htmlFor="desc" className="form-label">
          Desc
        </label>
        <input
          type="textbox"
          value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
          className="form-control"
          id="desc"
          placeholder="Enter desc"
        />
      </div>
      <button type="submit" className="btn btn-success" onClick={props.addTodo}>Submit</button>
      </form>
    </div>
  );
}
