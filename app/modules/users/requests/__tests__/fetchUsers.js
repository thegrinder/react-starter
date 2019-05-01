import { runSaga } from 'redux-saga';
import { fetchUsers } from '../../api';
import {
  fetchUsersActionTypes,
  fetchUsersActions,
  fetchUsersSaga,
} from '../fetchUsers';

jest.mock('../../api');

describe('fetchUsers action creators', () => {
  describe('fetchUsersUpdate', () => {
    it('should return UPDATE action type', () => {
      const data = {};
      const expectedAction = {
        type: fetchUsersActionTypes.UPDATE,
        data,
      };
      expect(fetchUsersActions.update(data)).toEqual(expectedAction);
    });
  });

  describe('fetchUsersTrigger', () => {
    it('should return TRIGGER action type', () => {
      const queryParams = {};
      const expectedAction = {
        type: fetchUsersActionTypes.TRIGGER,
        queryParams,
      };
      expect(fetchUsersActions.trigger(queryParams)).toEqual(expectedAction);
    });
  });
});

describe('fetchUsersSaga', () => {
  let dispatched;
  const queryParams = { param: 'param' };

  beforeEach(async () => {
    dispatched = [];
  });

  it('should dispatch successful request actions', async () => {
    const id = 'id';
    const response = { data: [{ id }] };
    fetchUsers.mockResolvedValueOnce(response);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => {},
      },
      fetchUsersSaga,
      { queryParams }
    ).done;

    const normalizedResponse = { [id]: { id } };
    const expectedActions = [
      fetchUsersActions.loading(),
      fetchUsersActions.update(normalizedResponse),
      fetchUsersActions.succeeded(),
      fetchUsersActions.fulfilled(),
    ];
    expect(fetchUsers).toBeCalledWith(queryParams);
    expect(dispatched).toEqual(expectedActions);
  });

  it('should dispatch successful request actions', async () => {
    const error = new Error('test error');
    fetchUsers.mockRejectedValueOnce(error);

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => {},
      },
      fetchUsersSaga,
      { queryParams }
    ).done;

    const expectedActions = [
      fetchUsersActions.loading(),
      fetchUsersActions.failed(error),
      fetchUsersActions.fulfilled(),
    ];
    expect(fetchUsers).toBeCalledWith(queryParams);
    expect(dispatched).toEqual(expectedActions);
  });
});
