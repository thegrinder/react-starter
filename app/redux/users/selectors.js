import { useSelector } from 'react-redux';

// selectors
export const usersStateSelector = state => state.users;

export const usersSelector = state => usersStateSelector(state).data;

export const userSelector = (state, id) => usersStateSelector(state).data[id];

export const fetchUsersRequestSelector = state => usersStateSelector(state).requests.fetchUsers;

export const fetchUserRequestSelector = state => usersStateSelector(state).requests.fetchUser;

// hooks
export const getUsersState = () => useSelector(usersStateSelector);

export const getUsers = () => useSelector(usersSelector);

export const getUser = id => useSelector(state => userSelector(state, id), [id]);

export const getFetchUsersRequestState = () => useSelector(fetchUsersRequestSelector);

export const getFetchUserRequestState = () => useSelector(fetchUserRequestSelector);
