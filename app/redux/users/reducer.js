import { initialRequestState } from '../helpers';
import { fetchUsersActionTypes, fetchUsersReducer } from './requests/fetchUsers';
import { fetchUserActionTypes, fetchUserReducer } from './requests/fetchUser';

export const initialUsersState = {
  data: {},
  requests: {
    fetchUsers: initialRequestState,
    fetchUser: initialRequestState,
  },
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case fetchUsersActionTypes.UPDATE:
      return {
        ...state,
        data: action.data,
      };
    case fetchUserActionTypes.UPDATE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.uid]: action.data,
        },
      };
    default:
      return {
        ...state,
        requests: {
          ...state.requests,
          fetchUsers: fetchUsersReducer(state.fetchUsers, action),
          fetchUser: fetchUserReducer(state.fetchUser, action),
        },
      };
  }
};

export default usersReducer;
