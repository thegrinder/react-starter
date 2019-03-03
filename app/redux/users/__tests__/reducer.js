import usersReducer, { initialUsersState } from '../reducer';
import { fetchUsersActions } from '../requests/fetchUsers';

describe('fetchUsers reducer', () => {
  it('return initial state', () => {
    expect(usersReducer(initialUsersState, { type: 'NOOP' })).toEqual(initialUsersState);
  });

  it('handles UPDATE action properly', () => {
    const data = { 1: 'test' };
    const expectedState = {
      ...initialUsersState,
      data,
    };
    expect(usersReducer(initialUsersState, fetchUsersActions.update(data)))
      .toEqual(expectedState);
  });
});
