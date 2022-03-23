import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = (id) => {
    props.onComplete(id);
  }
  const onDelete = (id) => {
    props.onDelete(id);
  }

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
