export const getUsersState = state => state.users;

export const getUsers = state => getUsersState(state).data;

export const getUser = (state, uid) => getUsersState(state).data[uid];

export const getFetchUsersRequestState = state => getUsersState(state).requests.fetchUsers;

export const getFetchUserRequestState = state => getUsersState(state).requests.fetchUser;
