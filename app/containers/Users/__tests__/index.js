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
import { createState, createRequestState } from '../../../redux/users/test-uitls';
import { Users } from '..';


const renderComponent = store => render(
  <MemoryRouter>
    <Provider store={store}>
      <Users />
    </Provider>
  </MemoryRouter>,
);

describe('<Users />', () => {
  it('should render correctly', () => {
    const state = createState();
    const store = createStore(state);
    const { container: { firstChild } } = renderComponent(store);
    expect(firstChild).toBeDefined();
    expect(firstChild).toMatchSnapshot();
  });

  it('should search users with a given name on submit button click', () => {
    const state = createState();
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

  it('should render the spinner when the request is being made', () => {
    const state = createState({
      requestKey: 'fetchUsers',
      requestState: createRequestState({ loading: true }),
    });
    const store = createStore(state);
    const { getByLabelText } = renderComponent(store);
    expect(getByLabelText('loading...')).toBeInTheDocument();
  });
});
