import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButtom } from './TodoCreateButtom';

// import './App.css';

const todos = [
  { id: 1, text: 'Tarea 1', completed: false},
  { id: 2, text: 'Tarea 2', completed: false},
  { id: 3, text: 'Tarea 3', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key = {todo.id} text = {todo.text}/>
          ))
        }
      </TodoList>

      <TodoCreateButtom/>

    </React.Fragment>
  );
}

export default App;
