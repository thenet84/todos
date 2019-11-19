import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ id, completed, deleteTodo, markComplete, title }) => (
  <div className="todoItemWrapper">
    <p className={completed ? 'todoItemCompleted' : 'todoItem'}>
      <input type="checkbox" defaultChecked={completed} onChange={markComplete(id)} /> {title}
      <button type="button" className="deleteButton" onClick={deleteTodo(id)}>
        X
      </button>
    </p>
  </div>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  deleteTodo: PropTypes.func,
  title: PropTypes.string,
  markComplete: PropTypes.func,
};
