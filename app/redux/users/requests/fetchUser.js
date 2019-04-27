import { useActions } from 'react-redux';

import { call, put } from 'redux-saga/effects';
import { createRequest } from '../../helpers';
import { fetchUser } from '../requests';

const { actionTypes, actionCreators, reducer } = createRequest('users/requests/fetchUser');

export const fetchUserActionTypes = actionTypes;
export const fetchUserReducer = reducer;

const fetchUserUpdate = data => ({
  data,
  type: actionTypes.UPDATE,
});

const fetchUserTrigger = id => ({
  id,
  type: actionTypes.TRIGGER,
});

export const fetchUserActions = {
  ...actionCreators,
  update: fetchUserUpdate,
  trigger: fetchUserTrigger,
};

export function* fetchUserSaga(action) {
  yield put(fetchUserActions.loading());
  try {
    const { data } = yield call(fetchUser, action.id);
    yield put(fetchUserActions.update(data));
    yield put(fetchUserActions.succeeded());
  } catch (error) {
    yield put(fetchUserActions.failed(error));
  } finally {
    yield put(fetchUserActions.fulfilled());
  }
}

export const useFetchUserActions = () => useActions({
  fetchUser: fetchUserActions.trigger,
  resetFetchUserState: fetchUserActions.reset,
});
