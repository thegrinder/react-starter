import { call, put } from 'redux-saga/effects';
import { axiosInstance, createRequest, getError } from '../helpers';

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

export const request = queryParams => axiosInstance.get('/search/repositories', { params: queryParams });

export function* fetchReposSaga(action) {
  yield put(fetchReposActions.loading());
  try {
    const { data } = yield call(request, action.queryParams);
    yield put(fetchReposActions.succeeded(data.items));
  } catch (error) {
    yield put(fetchReposActions.failed(getError(error)));
  } finally {
    yield put(fetchReposActions.fulfilled());
  }
}
