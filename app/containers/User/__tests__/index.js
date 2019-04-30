import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';

import { render, createStore } from '../../../helpers/test-utils';
import { useFetchUserActions } from '../../../redux/users';
import { User } from '..';

jest.mock('../../../redux/users');


const id = 'id';
const state = {
  users: {
    data: {
      [id]: {
        id,
        name: 'name',
        username: 'username',
        email: 'email@email.com',
        phone: '132456776',
      },
    },
    requests: {
      fetchUser: {
        loading: false,
      },
    },
  },
};

const renderComponent = store => render(
  <MemoryRouter initialEntries={['/users/id']}>
    <Provider store={store}>
      <Route path="/users/:id" component={User} />
    </Provider>
  </MemoryRouter>,
);

describe('<User />', () => {
  it('should render correctly', () => {
    const store = createStore(state);
    const { container: { firstChild } } = renderComponent(store);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  // it('should render the spinner if loading flag set to true', () => {
  //   const { container: { firstChild }, getByLabelText } = renderComponent();
  //   const spinnerElement = getByLabelText('loading...');
  //   expect(firstChild).toContainElement(spinnerElement);
  // });

  // it('should render the spinner if user is not defined', () => {
  //   const { container: { firstChild }, getByLabelText } = renderComponent();
  //   const spinnerElement = getByLabelText('loading...');
  //   expect(firstChild).toContainElement(spinnerElement);
  // });

  it('should fetch user with a specific id on mount', () => {
    const store = createStore(state);
    renderComponent(store);
    expect(useFetchUserActions().fetchUser).toHaveBeenCalledWith(id);
  });
});
