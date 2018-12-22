import { reposSelectors } from '../selectors';
import { initialRequestState } from '../helpers';

const { getReposState, getFetchReposRequestState, getRepos } = reposSelectors;

const state = {
  repos: {
    data: {
      1: {
        name: 'repo',
      },
    },
    fetchRepos: {
      ...initialRequestState,
      error: 'error',
    },
  },
};

describe('reposSelectors', () => {
  describe('getReposState', () => {
    it('should return repos state', () => {
      expect(getReposState(state)).toEqual(state.repos);
    });
  });

  describe('getFetchReposRequestState', () => {
    it('should return fetchRepos request state', () => {
      expect(getFetchReposRequestState(state)).toEqual(state.repos.fetchRepos);
    });
  });

  describe('getRepos', () => {
    it('should return fetched repos', () => {
      expect(getRepos(state)).toEqual(state.repos.data);
    });
  });
});
