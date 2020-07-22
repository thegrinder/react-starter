import { call, put } from 'redux-saga/effects';

import { normalize } from 'utils';
import { createRequest } from '../../helpers';
import { fetchUsers } from '../api';

const { actionTypes, actionCreators, reducer } = createRequest(
  'users/requests/fetchUsers'
);

export const fetchUsersActionTypes = actionTypes;
export const fetchUsersReducer = reducer;

const fetchUsersUpdate = (data) => ({
  data,
  type: actionTypes.UPDATE,
});

const fetchUsersTrigger = (queryParams = {}) => ({
  queryParams,
  type: actionTypes.TRIGGER,
});

export const fetchUsersActions = {
  ...actionCreators,
  update: fetchUsersUpdate,
  trigger: fetchUsersTrigger,
};

export function* fetchUsersSaga(action) {
  yield put(fetchUsersActions.loading());
  try {
    const { data } = yield call(fetchUsers, action.queryParams);
    yield put(fetchUsersActions.update(normalize(data)));
    yield put(fetchUsersActions.succeeded());
  } catch (error) {
    yield put(fetchUsersActions.failed(error));
  } finally {
    yield put(fetchUsersActions.fulfilled());
  }
}
