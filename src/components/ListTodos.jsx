import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  // get all todos
  const getTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/todos')
      const data = response.data
      setTodos(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  // delete a todo
  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${todoId}`)
      setTodos(todos.filter(todo => todo.todo_id !== todoId))
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect( () => {
    getTodos()
  }, [])

  return (
    <Fragment>
      <div id="listTodos">
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(todo => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo} /></td>
                <td><button className="btn btn-danger" onClick={() => {deleteTodo(todo.todo_id)}}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </Fragment>
  )
}

export default ListTodos