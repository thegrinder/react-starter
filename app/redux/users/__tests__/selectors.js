import { getUsersState, getFetchUsersRequestState, getUsers } from '../selectors';
import { initialRequestState } from '../../helpers';

const data = {
  1: {
    id: '1',
    name: 'user',
  },
};

const fetchUsersState = {
  ...initialRequestState,
  error: 'error',
};

const state = {
  users: {
    data,
    requests: {
      fetchUsers: fetchUsersState,
    },
  },
};

describe('users selectors', () => {
  describe('getUsers', () => {
    it('should return users state', () => {
      expect(getUsersState(state)).toEqual(state.users);
    });
  });

  describe('getFetchUsersRequestState', () => {
    it('should return fetchUsers request state', () => {
      expect(getFetchUsersRequestState(state)).toEqual(fetchUsersState);
    });
  });

  describe('getUsers', () => {
    it('should return fetched users', () => {
      expect(getUsers(state)).toEqual(data);
    });
  });
});
