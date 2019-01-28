import { call, put } from 'redux-saga/effects';
import { createRequest } from '../../helpers';
import { fetchRepos } from '../requests';

const { actionTypes, actionCreators, reducer } = createRequest('repos/requests/fetchRepos');

export const fetchReposActionTypes = actionTypes;
export const fetchReposReducer = reducer;

export const fetchReposUpdate = data => ({
  data,
  type: actionTypes.UPDATE,
});

export const fetchReposTrigger = (queryParams = {}) => ({
  queryParams,
  type: actionTypes.TRIGGER,
});

export const fetchReposActions = {
  ...actionCreators,
  update: fetchReposUpdate,
  trigger: fetchReposTrigger,
};

export function* fetchReposSaga(action) {
  yield put(fetchReposActions.loading());
  try {
    const { data } = yield call(fetchRepos, action.queryParams);
    yield put(fetchReposActions.update(data.items));
    yield put(fetchReposActions.succeeded());
  } catch (error) {
    yield put(fetchReposActions.failed(error));
  } finally {
    yield put(fetchReposActions.fulfilled());
  }
}
