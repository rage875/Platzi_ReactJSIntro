import React from 'react'
// import './App.css';

const todos = [
  { text: 'Tarea 1', completed: false},
  { text: 'Tarea 2', completed: false},
  { text: 'Tarea 3', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      <h2>Has completado 2 de 3 TODOs</h2>

      {/* <TodoSearch /> */}
      <input placeholder="Default text"/>

      {/* <TodoList>
        {
          todos.map(todo => (
            <TodoItem />
          ))
        }
      </TodoList> */}

      {/* <CreateTodoButtom/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
