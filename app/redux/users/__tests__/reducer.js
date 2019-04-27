import usersReducer, { initialUsersState } from '../reducer';
import { fetchUsersActions } from '../requests/fetchUsers';
import { fetchUserActions } from '../requests/fetchUser';

describe('fetchUsers reducer', () => {
  it('return initial state', () => {
    expect(usersReducer(initialUsersState, { type: 'NOOP' })).toEqual(initialUsersState);
    expect(initialUsersState).toMatchSnapshot();
  });

  it('handles fetchUsers UPDATE action properly', () => {
    const data = { 1: 'test' };
    const expectedState = {
      ...initialUsersState,
      data,
    };
    expect(usersReducer(initialUsersState, fetchUsersActions.update(data)))
      .toEqual(expectedState);
  });

  it('handles fetchUser UPDATE action properly', () => {
    const id = '123';
    const data = { id };
    const expectedState = {
      ...initialUsersState,
      data: {
        [id]: data,
      },
    };
    expect(usersReducer(initialUsersState, fetchUserActions.update(data)))
      .toEqual(expectedState);
  });
});
