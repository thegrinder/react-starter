import { fetchReposSucceeded, fetchReposTrigger, fetchReposActionTypes } from '../fetchRepos';

describe('fetchRepos action creators', () => {
  describe('fetchReposSucceeded', () => {
    it('should return SUCCEEDED action type', () => {
      const data = {};
      const expectedAction = {
        type: fetchReposActionTypes.SUCCEEDED,
        data,
      };
      expect(fetchReposSucceeded(data)).toEqual(expectedAction);
    });
  });

  describe('fetchReposTrigger', () => {
    it('should return TRIGGER action type', () => {
      const queryParams = {};
      const expectedAction = {
        type: fetchReposActionTypes.TRIGGER,
        queryParams,
      };
      expect(fetchReposTrigger(queryParams)).toEqual(expectedAction);
    });
  });
});
