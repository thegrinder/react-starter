import { fetchUserActions } from './fetchUser';
import { fetchUsersActions } from './fetchUsers';

export const fetchUser = fetchUserActions.trigger;
export const resetFetchUserRequestState = fetchUserActions.reset;

export const fetchUsers = fetchUsersActions.trigger;
export const resetFetchUsersRequestState = fetchUsersActions.reset;
