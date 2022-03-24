import React from 'react'
import { TodoContext } from '../TodoContext'

import './TodoForm.css'

function TodoForm() {
  const {addTodos, setOpenModal} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} >
      <label>Create new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write a new TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export {TodoForm};
