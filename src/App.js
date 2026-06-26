import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on Delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "Email Activity",
  //     desc: "Check daily emails and update to manager."
  //   },
  //   {
  //     sno: 2,
  //     title: "Task Followup",
  //     desc: "Take standup meeting and discuss the tasks with team."
  //   },
  //   {
  //     sno: 3,
  //     title: "Client Meeting",
  //     desc: "Meeting with bussines team and ask about documents of requirment."
  //   },
  //   {
  //     sno: 4,
  //     title: "Reporting",
  //     desc: "Task reporting on portal and update with TL."
  //   },
  // ]);
  return (
    <>
      <Router>
        <div className="app-container">

          <Header searchBar={true} />
          <Routes>
            <Route exact path="/" 
            element={
              <>
                <div>
                  <AddTodo addTodo={addTodo} />
                </div>
                <div className="content">
                  <Todos todos={todos} onDelete={onDelete} />
                </div>
                </>
            }>
            </Route>
            <Route exact path="/about" element={<About />} />
            
          </Routes>
          
          <Footer />

        </div>
      </Router>
    </>
  );
}

export default App;
