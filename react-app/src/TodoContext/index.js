import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TODOS_VERSION = 'TODOS_V1'

function TodoProvider(props) {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage(TODOS_VERSION, []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: newTodos.length + 1,
      text: text,
      completed: false,
    })
    saveTodos(newTodos);
  }

  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
  <TodoContext.Provider value = {{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodos,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal,
  }}>
    {props.children}
  </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};
