const fetchUser = jest.fn();
const resetFetchUserState = jest.fn();

export const useFetchUserActions = jest.fn().mockImplementation(() => ({
  fetchUser,
  resetFetchUserState,
}));

const fetchUsers = jest.fn();
const resetFetchUsersState = jest.fn();

export const useFetchUsersActions = jest.fn().mockImplementation(() => ({
  fetchUsers,
  resetFetchUsersState,
}));

export * from '../selectors';
