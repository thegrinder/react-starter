import usersReducer, { initialUsersState } from '../reducer';
import { fetchUsersActions } from '../requests/fetchUsers';
import { fetchUserActions } from '../requests/fetchUser';
import { createUsersState } from '../test-utils';

describe('fetchUsers reducer', () => {
  it('return initial state', () => {
    expect(usersReducer(undefined, { type: 'NOOP' })).toEqual(initialUsersState);
    expect(initialUsersState).toMatchSnapshot();
  });

  it('handles fetchUsers UPDATE action properly', () => {
    const data = { 1: 'test' };
    const state = createUsersState();
    const expectedState = createUsersState({ data });
    expect(usersReducer(state, fetchUsersActions.update(data))).toEqual(expectedState);
  });

  it('handles fetchUser UPDATE action properly', () => {
    const id = '123';
    const data = { id };
    const state = createUsersState();
    const expectedState = createUsersState({ data: { [id]: data } });
    expect(usersReducer(state, fetchUserActions.update(data))).toEqual(expectedState);
  });
});
