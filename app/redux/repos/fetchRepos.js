import { call, put } from 'redux-saga/effects';
import axiosInstance from '../../helpers/axios';
import { createRequest } from '../../helpers/request-redux';

const namespace = 'repos/requests/fetchRepos';

const requestRedux = createRequest(namespace);

const FETCH_REPOS_SUCCEEDED = `${namespace}/FETCH_REPOS_SUCCEEDED`;
const FETCH_REPOS_TRIGGER = `${namespace}/FETCH_REPOS_TRIGGER`;

export const fetchReposActionTypes = {
  ...requestRedux.actionTypes,
  SUCCEEDED: FETCH_REPOS_SUCCEEDED,
  TRIGGER: FETCH_REPOS_TRIGGER,
};

export const fetchReposSucceeded = data => ({
  data,
  type: FETCH_REPOS_SUCCEEDED,
});

export const fetchReposTrigger = (queryParams = {}) => ({
  queryParams,
  type: FETCH_REPOS_TRIGGER,
});

export const fetchReposActions = {
  ...requestRedux.actionCreators,
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
    yield put(fetchReposActions.failed(error));
  } finally {
    yield put(fetchReposActions.fulfilled());
  }
}

export const fetchReposReducer = requestRedux.reducer;
