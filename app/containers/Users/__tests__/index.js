import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import {
  render,
  fireEvent,
  act,
  createStore,
} from '../../../helpers/test-utils';
import { fetchUsers } from '../../../redux/users';
import { Users } from '..';


const state = {
  users: {
    data: {
      id: {
        id: 'id',
        name: 'name',
        username: 'username',
        email: 'email@email.com',
        phone: '132456776',
      },
    },
    requests: {
      fetchUsers: {
        loading: false,
      },
    },
  },
};

const renderComponent = store => render(
  <MemoryRouter>
    <Provider store={store}>
      <Users />
    </Provider>
  </MemoryRouter>,
);

describe('<Users />', () => {
  it('should render correctly', () => {
    const store = createStore(state);
    const { container: { firstChild } } = renderComponent(store);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should search users with a given name on submit button click', () => {
    const store = createStore(state);
    const { getByText, getByPlaceholderText } = renderComponent(store);
    const name = 'text';
    act(() => {
      fireEvent.change(getByPlaceholderText('Search'), { target: { value: name } });
    });
    act(() => {
      fireEvent.click(getByText('Search'));
    });
    expect(store.getActions()).toContainEqual(fetchUsers({ name }));
  });
});
