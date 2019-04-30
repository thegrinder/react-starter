import {
  usersStateSelector,
  usersSelector,
  userSelector,
  fetchUsersRequestSelector,
  fetchUserRequestSelector,
} from '../selectors';
import { initialRequestState } from '../../helpers';

const id = '1';
const data = {
  [id]: {
    id,
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
  describe('usersStateSelector', () => {
    it('should return users state', () => {
      expect(usersStateSelector(state)).toEqual(state.users);
    });
  });

  describe('usersSelector', () => {
    it('should return fetched users', () => {
      expect(usersSelector(state)).toEqual(data);
    });
  });

  describe('userSelector', () => {
    it('should return the correct user', () => {
      expect(userSelector(state, id)).toEqual(data[id]);
    });
  });

  describe('fetchUsersRequestSelector', () => {
    it('should return fetchUsers request state', () => {
      expect(fetchUsersRequestSelector(state)).toEqual(fetchUsersState);
    });
  });

  describe('fetchUserRequestSelector', () => {
    it('should return fetchUser request state', () => {
      expect(fetchUserRequestSelector(state)).toEqual(fetchUserState);
    });
  });
});
