
import { useState,useEffect } from 'react';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';

function App() { 
  let inittodo;
  if(localStorage.getItem("todos"))
     inittodo=[];
  else
     inittodo=JSON.parse(localStorage.getItem("todos"));
  const wrapperStyle = {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const footerDefaultStyle = {
    flexShrink: 0, // Prevent the footer from shrinking
    width: "100%",
  };
  const onDelete=(todo)=>{
    //console.log('i m delete btn',todo);
    settodos(todos.filter((e)=>{
       return e!==todo;
    }))
  }
  const addtodo=(title,desc)=>{
    let sno;
   // console.log(title,desc);
    if(todos.length===0)
    sno=0;
    else
    sno=todos[todos.length-1].sno+1;
   const mytodos={
    sno:sno,
    title:title,
    desc:desc,
   }
  settodos([...todos,mytodos]);
  
  }
  const[todos,settodos]=useState(inittodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
 
  // const[todos,settodos]=useState([
    // {
    //     sno: 1,
    //     title: "Go to the market",
    //     desc: "Go to the market and get the job done"
    // },
    // {
    //     sno: 2,
    //     title: "Go to the mall",
    //     desc: "Go to the mall and get the job done"
    // },
    // {
    //     sno: 3,
    //     title: "Go to the shop",
    //     desc: "Go to the shop and get the job done"
    // },
    
  // ])
  return (
    <div style={wrapperStyle}>
      <div className="header">
        <Header title="My ToDo List" searchBar={false} />
      </div>
      <div style={contentStyle}>
        <AddTodo addtodo={addtodo}/>
        <Todos title="Todos List" todos={todos} onDelete={onDelete} />
      </div>
      <div style={footerDefaultStyle}>
        <Footer />
      </div>
    </div>
  );
}
export default App;
