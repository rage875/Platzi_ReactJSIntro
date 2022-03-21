import React from "react";
import './TodoCreateButtom.css';

function TodoCreateButtom() {
  const onClickButtom = () => {
    alert('TodoCreateButtom onClickButtom');
  };


    return (
      <button
        className="CreateTodoButton"
        onClick={onClickButtom}
      >
        +
      </button>
    )
}

export { TodoCreateButtom };
