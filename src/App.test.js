import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a new todo to the todo list', () => {
    const wrapper = shallow(<App />);

    wrapper
      .find('TodoForm')
      .props()
      .onChange({ preventDefault: jest.fn(), target: { value: 'hello' } });

    wrapper
      .find('TodoForm')
      .props()
      .onSubmit({ preventDefault: jest.fn(), target: { value: 'hello' } });

    expect(wrapper.find('TodoList').prop('todos')).toEqual([{ name: 'hello' }]);
  });
});
