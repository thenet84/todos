import React from 'react';
import { shallow } from 'enzyme';

import { TodoForm } from './TodoForm';

describe('TodoForm Component', () => {
  let onChangeSpy;
  let onSubmitSpy;
  let props;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    props = {
      onChange: onChangeSpy,
      onSubmit: onSubmitSpy,
      term: '',
    };
  });

  it('should render correctly', () => {
    const wrapper = shallow(<TodoForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the input test while writing', () => {
    const wrapper = shallow(<TodoForm {...props} />);

    wrapper.find('input').simulate('change', {
      target: { value: 'hello' },
    });

    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange).toHaveBeenCalledWith({
      target: { value: 'hello' },
    });
  });

  it('should submit the form', () => {
    const wrapper = shallow(<TodoForm {...props} />);

    wrapper.find('form').simulate('submit', {
      target: { value: 'hello' },
    });

    expect(props.onSubmit).toHaveBeenCalled();
    expect(props.onSubmit).toHaveBeenCalledWith({
      target: { value: 'hello' },
    });
  });
});
