import { call, put } from 'redux-saga/effects';
import { createRequest, getError } from '../../helpers';
import { fetchRepos } from '../requests';

const { actionTypes, actionCreators, reducer } = createRequest('repos/requests/fetchRepos');

export const fetchReposActionTypes = actionTypes;
export const fetchReposReducer = reducer;

export const fetchReposSucceeded = data => ({
  data,
  type: actionTypes.SUCCEEDED,
});

export const fetchReposTrigger = (queryParams = {}) => ({
  queryParams,
  type: actionTypes.TRIGGER,
});

export const fetchReposActions = {
  ...actionCreators,
  succeeded: fetchReposSucceeded,
  trigger: fetchReposTrigger,
};

export function* fetchReposSaga(action) {
  yield put(fetchReposActions.loading());
  try {
    const { data } = yield call(fetchRepos, action.queryParams);
    yield put(fetchReposActions.succeeded(data.items));
  } catch (error) {
    yield put(fetchReposActions.failed(getError(error)));
  } finally {
    yield put(fetchReposActions.fulfilled());
  }
}
