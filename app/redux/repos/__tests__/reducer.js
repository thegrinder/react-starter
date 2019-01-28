import reposReducer, { initialReposState } from '../reducer';
import { fetchReposActions } from '../requests/fetchRepos';

describe('fetchRepos reducer', () => {
  it('return initial state', () => {
    expect(reposReducer(initialReposState, { type: 'NOOP' })).toEqual(initialReposState);
  });

  it('handles UPDATE action properly', () => {
    const data = { 1: 'test' };
    const expectedState = {
      ...initialReposState,
      data,
    };
    expect(reposReducer(initialReposState, fetchReposActions.update(data)))
      .toEqual(expectedState);
  });
});
