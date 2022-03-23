import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButtom } from '../TodoCreateButtom';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {error, loading, searchedTodos, completeTodos, deleteTodos} = React.useContext(TodoContext);

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

      <TodoCreateButtom />
    </React.Fragment>
  );
}

export { AppUI };