import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import axios from 'axios';

import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { fetchTodos } from '../../api';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${todosUrl}?_limit=10`)
      .then(res => this.setState({ todos: res.data }))
      .catch(error => {
        throw new Error(error);
      });
    // fetchTodos()
    //   .then(todos => {
    //     this.setState({ todos });
    //   })
    //   .catch(() => {
    //     throw new Error('error');
    //   });
  }

  addTodo = title => {
    // const newTodo = { id: uuid.v4(), title, completed: false };
    axios
      .post(todosUrl, { title, completed: false })
      .then(res =>
        this.setState(prevState => ({
          todos: [...prevState.todos, res.data],
        }))
      )
      .catch(error => {
        throw new Error(error);
      });
  };

  markComplete = id => () => {
    this.setState(prevState => {
      return prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    });
  };

  deleteTodo = id => () => {
    axios
      .delete(`${todosUrl}/${id}`)
      .then(() => this.setState(prevState => ({ todos: [...prevState.todos.filter(todo => todo.id !== id)] })))
      .catch(error => {
        throw new Error(error);
      });
  };

  render() {
    return (
      <Fragment>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </Fragment>
    );
  }
}
