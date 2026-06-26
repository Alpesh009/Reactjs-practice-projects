import React from 'react'
import TodoItem from './TodoItem';
import "./Todos.css";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className="my-3">Todos list</h3>
      {props.todos.length===0?
      (
        <div className="no-data">
          <h3>No Todos Found</h3>
          <p>Add some tasks to get started 🚀</p>
        </div>
      )
       :
      props.todos.map((item) => {
        return <TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />
      })
       }
      
    </div>
  )
}

export default Todos;