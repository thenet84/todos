import { todos } from './data';

export const fetchTodos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos.todos);
    }, 0);
  });
};
