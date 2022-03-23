import React from 'react'
import { AppUI } from './AppUI';

// import './App.css';

const TODOS_VERSION = 'TODOS_V1'

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      // Simulate that we are getting data from another source that will take a few time
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000)
    } catch (error) {
      setError(error);
    }

  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {item, saveItem, loading, error};
}

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage(TODOS_VERSION, []);
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
    saveTodos(newTodos);
  }

  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading = {loading}
      error = {error}
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
