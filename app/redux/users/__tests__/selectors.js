import {
  getUsersState,
  getUsers,
  getUser,
  getFetchUsersRequestState,
  getFetchUserRequestState,
} from '../selectors';
import { initialRequestState } from '../../helpers';

const uid = '1';
const data = {
  [uid]: {
    uid,
    name: 'user',
  },
};

const fetchUsersState = {
  ...initialRequestState,
  error: 'error',
};

const fetchUserState = {
  ...initialRequestState,
  succeeded: true,
};

const state = {
  users: {
    data,
    requests: {
      fetchUsers: fetchUsersState,
      fetchUser: fetchUserState,
    },
  },
};

describe('users selectors', () => {
  describe('getUsersState', () => {
    it('should return users state', () => {
      expect(getUsersState(state)).toEqual(state.users);
    });
  });

  describe('getUsers', () => {
    it('should return fetched users', () => {
      expect(getUsers(state)).toEqual(data);
    });
  });

  describe('getUser', () => {
    it('should return the correct user', () => {
      expect(getUser(state, uid)).toEqual(data[uid]);
    });
  });

  describe('getFetchUsersRequestState', () => {
    it('should return fetchUsers request state', () => {
      expect(getFetchUsersRequestState(state)).toEqual(fetchUsersState);
    });
  });

  describe('getFetchUserRequestState', () => {
    it('should return fetchUser request state', () => {
      expect(getFetchUserRequestState(state)).toEqual(fetchUserState);
    });
  });
});
