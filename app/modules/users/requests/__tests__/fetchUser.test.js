import { runSaga } from 'redux-saga';
import { fetchUser } from '../../api';
import {
  fetchUserActionTypes,
  fetchUserActions,
  fetchUserSaga,
} from '../fetchUser';

jest.mock('../../api');

describe('fetchUser action creators', () => {
  describe('fetchUserUpdate', () => {
    it('should return UPDATE action type', () => {
      const data = {};
      const expectedAction = {
        type: fetchUserActionTypes.UPDATE,
        data,
      };
      expect(fetchUserActions.update(data)).toEqual(expectedAction);
    });
  });

  describe('fetchUserTrigger', () => {
    it('should return TRIGGER action type', () => {
      const id = '1234';
      const expectedAction = {
        type: fetchUserActionTypes.TRIGGER,
        id,
      };
      expect(fetchUserActions.trigger(id)).toEqual(expectedAction);
    });
  });
});

describe('fetchUserSaga', () => {
  let dispatched;
  const id = '1234';

  beforeEach(async () => {
    dispatched = [];
  });

  it('should dispatch successful request actions', async () => {
    const response = { data: {} };
    fetchUser.mockResolvedValueOnce(response);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => {},
      },
      fetchUserSaga,
      { id }
    ).done;

    const expectedActions = [
      fetchUserActions.loading(),
      fetchUserActions.update(response.data),
      fetchUserActions.succeeded(),
      fetchUserActions.fulfilled(),
    ];
    expect(fetchUser).toBeCalledWith(id);
    expect(dispatched).toEqual(expectedActions);
  });

  it('should dispatch successful request actions', async () => {
    const error = new Error('test error');
    fetchUser.mockRejectedValueOnce(error);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => {},
      },
      fetchUserSaga,
      { id }
    ).done;

    const expectedActions = [
      fetchUserActions.loading(),
      fetchUserActions.failed(error),
      fetchUserActions.fulfilled(),
    ];
    expect(fetchUser).toBeCalledWith(id);
    expect(dispatched).toEqual(expectedActions);
  });
});
