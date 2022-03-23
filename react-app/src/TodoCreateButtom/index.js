import React from "react";
import './TodoCreateButtom.css';

function TodoCreateButtom(props) {
  const onClickButtom = () => {
    props.setOpenModal(prevState => !prevState);
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
