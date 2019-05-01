import {
  usersStateSelector,
  usersSelector,
  userSelector,
  fetchUsersRequestSelector,
  fetchUserRequestSelector,
} from '../selectors';
import { createState, createRequestState } from '../test-uitls';


describe('users selectors', () => {
  describe('usersStateSelector', () => {
    it('should return users state', () => {
      const state = createState();
      expect(usersStateSelector(state)).toEqual(state.users);
    });
  });

  describe('usersSelector', () => {
    it('should return fetched users', () => {
      const data = {
        id: {
          id: 'id',
          name: 'user',
        },
      };
      const state = createState({ data });
      expect(usersSelector(state)).toEqual(data);
    });
  });

  describe('userSelector', () => {
    it('should return the correct user', () => {
      const id = 'id';
      const user = {
        id,
        name: 'user',
      };
      const state = createState({ data: { [id]: user } });
      expect(userSelector(state, id)).toEqual(user);
    });
  });

  describe('fetchUsersRequestSelector', () => {
    it('should return fetchUsers request state', () => {
      const fetchUsersRequestState = createRequestState({ loading: true });
      const state = createState({
        requestKey: 'fetchUsers',
        requestState: fetchUsersRequestState,
      });
      expect(fetchUsersRequestSelector(state)).toEqual(fetchUsersRequestState);
    });
  });

  describe('fetchUserRequestSelector', () => {
    it('should return fetchUser request state', () => {
      const fetchUserRequestState = createRequestState({ exception: 'exception' });
      const state = createState({
        requestKey: 'fetchUser',
        requestState: fetchUserRequestState,
      });
      expect(fetchUserRequestSelector(state)).toEqual(fetchUserRequestState);
    });
  });
});
