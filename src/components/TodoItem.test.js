import React from 'react';
import { shallow } from 'enzyme';

import { TodoItem } from './TodoItem';

describe('TodoItem Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
