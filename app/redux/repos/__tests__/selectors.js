import { getReposState, getFetchReposRequestState, getRepos } from '../selectors';
import { initialRequestState } from '../../helpers';

const data = {
  1: {
    name: 'repo',
  },
};

const fetchReposState = {
  ...initialRequestState,
  error: 'error',
};

const state = {
  repos: {
    data,
    requests: {
      fetchRepos: fetchReposState,
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
      expect(getFetchReposRequestState(state)).toEqual(fetchReposState);
    });
  });

  describe('getRepos', () => {
    it('should return fetched repos', () => {
      expect(getRepos(state)).toEqual(data);
    });
  });
});
