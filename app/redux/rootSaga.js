import { all, takeLatest } from 'redux-saga/effects';
import { fetchUsersActionTypes, fetchUsersSaga } from './users/requests/fetchUsers';

export const usersSagas = [
  takeLatest(fetchUsersActionTypes.TRIGGER, fetchUsersSaga),
];

function* rootSaga() {
  yield all([...usersSagas]);
}

export default rootSaga;
