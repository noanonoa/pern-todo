import axios from 'axios'
import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  
  // update todo
  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/todos/${todo.todo_id}`, {
        description: description
      })
    } catch (err) {
      console.error(err.message)
    }

    window.location = '/'
  }
  return (
    <Fragment>
      <button 
      type="button" 
      className="btn btn-warning" 
      data-toggle="modal" 
      data-target={`#modal${todo.todo_id}`}>
        Edit
      </button>
      <div className="modal fade" id={`modal${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
        <div id="dialog" className="modal-dialog">
          <div id="modalcontent" className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
            </div>
            <div className="modal-body">
              <input 
                type="text" 
                id={`input${todo.todo_id}`} 
                className="form-control" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button" 
                className="btn btn-warning" 
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button" 
                className="btn btn-danger" 
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo