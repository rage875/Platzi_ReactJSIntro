import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButtom } from '../TodoCreateButtom';

function AppUI(props) {
  return (
    <React.Fragment>
      <TodoCounter
        total = {props.totalTodos}
        completed = {props.completedTodos}
      />

      <TodoSearch
        searchValue = {props.searchValue}
        setSearchValue = {props.setSearchValue}
      />

      <TodoList>
        {props.error && <p>Something bad happened, please wait...</p>}
        {(props.loading && !props.error) && <p>Loading, please wait...</p>}
        {(!props.loading && !props.error) && 0 <= props.searchedTodos.length && <p>Loaded and working :)</p>}

        {props.searchedTodos.map(todo => (
          <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {()=> props.completeTodos(todo.id)}
            onDelete = {()=> props.deleteTodos(todo.id)}
          />
        ))}
      </TodoList>

      <TodoCreateButtom />
    </React.Fragment>
  );
}

export { AppUI };