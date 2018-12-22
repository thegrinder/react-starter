import { all, takeLatest } from 'redux-saga/effects';
import { fetchReposActionTypes, fetchReposSaga } from './repos/requests/fetchRepos';

export const reposSagas = [
  takeLatest(fetchReposActionTypes.TRIGGER, fetchReposSaga),
];

function* rootSaga() {
  yield all([...reposSagas]);
}

export default rootSaga;
