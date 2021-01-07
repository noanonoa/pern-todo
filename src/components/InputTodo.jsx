import React, { Fragment, useState } from 'react';
const axios = require('axios');

const InputTodo = () => {

  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/todos', {
        description: description
      })
      window.location = '/'
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern To Do List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo