import { initialRequestState } from '../helpers';
import { fetchUsersActionTypes, fetchUsersReducer } from './requests/fetchUsers';

export const initialUsersState = {
  data: {},
  requests: {
    fetchUsers: initialRequestState,
  },
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case fetchUsersActionTypes.UPDATE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return {
        ...state,
        requests: {
          ...state.requests,
          fetchUsers: fetchUsersReducer(state.fetchUsers, action),
        },
      };
  }
};

export default usersReducer;
