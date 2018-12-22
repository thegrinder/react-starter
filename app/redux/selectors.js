const getReposState = state => state.repos;

const getFetchReposRequestState = state => getReposState(state).fetchRepos;

const getRepos = state => getReposState(state).data;

export const reposSelectors = {
  getReposState,
  getFetchReposRequestState,
  getRepos,
};
