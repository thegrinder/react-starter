import { initialRequestState } from '../helpers';
import { fetchReposActionTypes, fetchReposReducer } from './requests/fetchRepos';

export const initialReposState = {
  data: [],
  requests: {
    fetchRepos: initialRequestState,
  },
};

const reposReducer = (state = initialReposState, action) => {
  switch (action.type) {
    case fetchReposActionTypes.UPDATE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return {
        ...state,
        requests: {
          ...state.requests,
          fetchRepos: fetchReposReducer(state.fetchRepos, action),
        },
      };
  }
};

export default reposReducer;
