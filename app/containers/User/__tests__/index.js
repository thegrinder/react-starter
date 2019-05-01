import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';

import { render, createStore } from '../../../helpers/test-utils';
import { fetchUser } from '../../../redux/users';
import { createUser, createState, createRequestState } from '../../../redux/users/test-uitls';
import { User } from '..';


const id = 'id';

const renderComponent = store => render(
  <MemoryRouter initialEntries={[`/users/${id}`]}>
    <Provider store={store}>
      <Route path="/users/:id" component={User} />
    </Provider>
  </MemoryRouter>,
);

describe('<User />', () => {
  it('should render correctly', () => {
    const user = createUser({ id });
    const state = createState({
      data: { id: user },
    });
    const store = createStore(state);
    const { container: { firstChild } } = renderComponent(store);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should render the spinner if loading flag set to true', () => {
    const user = createUser({ id });
    const state = createState({
      data: { [id]: user },
      requestKey: 'fetchUser',
      requestState: createRequestState({ loading: true }),
    });
    const store = createStore(state);
    const { container: { firstChild }, getByLabelText } = renderComponent(store);
    const spinnerElement = getByLabelText('loading...');
    expect(firstChild).toContainElement(spinnerElement);
  });

  it('should render the spinner if user is not defined', () => {
    const state = createState();
    const store = createStore(state);
    const { container: { firstChild }, getByLabelText } = renderComponent(store);
    const spinnerElement = getByLabelText('loading...');
    expect(firstChild).toContainElement(spinnerElement);
  });

  it('should fetch user with a specific id on mount', () => {
    const state = createState();
    const store = createStore(state);
    renderComponent(store);
    expect(store.getActions()).toContainEqual(fetchUser(id));
  });
});
