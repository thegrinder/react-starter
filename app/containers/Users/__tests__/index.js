import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent, act } from '../../../helpers/test-utils';
import { Users } from '..';

const fetchUsers = jest.fn();
const requiredProps = {
  fetchUsers,
  loading: false,
  users: {
    id: {
      id: 'id',
      name: 'name',
      username: 'username',
      email: 'email@email.com',
      phone: '132456776',
    },
  },
};

const renderComponent = (props = {}) => render(
  <MemoryRouter>
    <Users {...requiredProps} {...props} />
  </MemoryRouter>,
);

describe('<Users />', () => {
  it('should render correctly', () => {
    const { container: { firstChild } } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should search users with a given name on submit button click', () => {
    const { getByText, getByPlaceholderText } = renderComponent();
    const name = 'text';
    act(() => {
      fireEvent.change(getByPlaceholderText('Search'), { target: { value: name } });
    });
    act(() => {
      fireEvent.click(getByText('Search'));
    });
    expect(fetchUsers).toHaveBeenCalledWith({ name });
  });
});
