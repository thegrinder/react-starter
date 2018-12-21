const getReposState = state => state.repos;

const getFetchReposRequest = state => getReposState(state).fetchRepos;

const getRepos = state => getReposState(state).data;

export const reposSelectors = {
  getFetchReposRequest,
  getRepos,
};
