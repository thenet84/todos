import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = ({ deleteTodo, markComplete, todos }) => (
  <div>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  deleteTodo: PropTypes.func,
  markComplete: PropTypes.func,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
};
