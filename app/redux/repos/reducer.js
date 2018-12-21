import { initialRequestState } from '../../helpers/request-redux';
import { fetchReposActionTypes, fetchReposReducer } from './fetchRepos';

const initialReposState = {
  data: [],
  fetchRepos: initialRequestState,
};

const reposReducer = (state = initialReposState, action) => {
  switch (action.type) {
    case fetchReposActionTypes.FAILED:
    case fetchReposActionTypes.FULFILLED:
    case fetchReposActionTypes.LOADING:
    case fetchReposActionTypes.RESET:
      return {
        ...state,
        fetchRepos: fetchReposReducer(state.fetchRepos, action),
      };
    case fetchReposActionTypes.SUCCEEDED:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reposReducer;
