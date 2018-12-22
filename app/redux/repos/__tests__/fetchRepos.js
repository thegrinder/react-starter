import { runSaga } from 'redux-saga';
import { fetchRepos } from '../requests';
import {
  fetchReposSucceeded,
  fetchReposTrigger,
  fetchReposActionTypes,
  fetchReposActions,
  fetchReposSaga,
} from '../fetchRepos';

jest.mock('../requests');

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

describe('fetchReposSaga', () => {
  let dispatched;
  const queryParams = { param: 'param' };

  beforeEach(async () => {
    dispatched = [];
  });

  it('should dispatch successful request actions', async () => {
    const response = { data: { items: {} } };
    fetchRepos.mockResolvedValueOnce(response);

    await runSaga({
      dispatch: action => dispatched.push(action),
      getState: () => {},
    }, fetchReposSaga, { queryParams }).done;

    const expectedActions = [
      fetchReposActions.loading(),
      fetchReposActions.succeeded(response.data.items),
      fetchReposActions.fulfilled(),
    ];
    expect(fetchRepos).toBeCalledWith(queryParams);
    expect(dispatched).toEqual(expectedActions);
  });

  it('should dispatch successful request actions', async () => {
    const error = new Error('test error');
    fetchRepos.mockRejectedValueOnce(error);

    await runSaga({
      dispatch: action => dispatched.push(action),
      getState: () => {},
    }, fetchReposSaga, { queryParams }).done;

    const expectedActions = [
      fetchReposActions.loading(),
      fetchReposActions.failed(error),
      fetchReposActions.fulfilled(),
    ];
    expect(fetchRepos).toBeCalledWith(queryParams);
    expect(dispatched).toEqual(expectedActions);
  });
});
