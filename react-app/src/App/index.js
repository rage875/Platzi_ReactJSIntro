import React from 'react'
import { AppUI } from './AppUI';

// import './App.css';

const defaultTodos = [
  { id: 1, text: 'Tarea 1', completed: true},
  { id: 2, text: 'Tarea 2', completed: false},
  { id: 3, text: 'Tarea 3', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodos = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
    );
}

export default App;
