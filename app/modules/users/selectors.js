import { useSelector } from 'react-redux';

// selectors
export const usersStateSelector = (state) => state.users;

export const usersSelector = (state) => usersStateSelector(state).data;

export const userSelector = (state, id) => usersStateSelector(state).data[id];

export const fetchUsersRequestSelector = (state) =>
  usersStateSelector(state).requests.fetchUsers;

export const fetchUserRequestSelector = (state) =>
  usersStateSelector(state).requests.fetchUser;

// hooks
export const useUsersStateSelector = () => useSelector(usersStateSelector);

export const useUsersSelector = () => useSelector(usersSelector);

export const useUserSelector = (id) =>
  useSelector((state) => userSelector(state, id), [id]);

export const useFetchUsersRequestSelector = () =>
  useSelector(fetchUsersRequestSelector);

export const useFetchUserRequestSelector = () =>
  useSelector(fetchUserRequestSelector);
