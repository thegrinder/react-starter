import { initialRequestState } from '../helpers';
import { fetchReposActionTypes, fetchReposReducer } from './fetchRepos';

export const initialReposState = {
  data: [],
  fetchRepos: initialRequestState,
};

const reposReducer = (state = initialReposState, action) => {
  switch (action.type) {
    case fetchReposActionTypes.SUCCEEDED:
      return {
        ...state,
        data: action.data,
      };
    default:
      return {
        ...state,
        fetchRepos: fetchReposReducer(state.fetchRepos, action),
      };
  }
};

export default reposReducer;
