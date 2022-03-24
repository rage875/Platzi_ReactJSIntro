import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButtom } from '../TodoCreateButtom';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {error && <p>Something bad happened, please wait...</p>}
        {(loading && !error) && <p>Loading, please wait...</p>}
        {(!loading && !error) && 0 <= searchedTodos.length && <p>Loaded and working :)</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodos(todo.id)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}


      <TodoCreateButtom 
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };