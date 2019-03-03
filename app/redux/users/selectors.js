export const getUsersState = state => state.users;

export const getFetchUsersRequestState = state => getUsersState(state).requests.fetchUsers;

export const getUsers = state => getUsersState(state).data;
