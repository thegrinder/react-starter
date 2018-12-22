export const getReposState = state => state.repos;

export const getFetchReposRequestState = state => getReposState(state).fetchRepos;

export const getRepos = state => getReposState(state).data;
