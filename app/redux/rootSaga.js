import { all, takeLatest } from 'redux-saga/effects';
import { fetchUsersActionTypes, fetchUsersSaga } from './users/requests/fetchUsers';
import { fetchUserActionTypes, fetchUserSaga } from './users/requests/fetchUser';

export const usersSagas = [
  takeLatest(fetchUsersActionTypes.TRIGGER, fetchUsersSaga),
  takeLatest(fetchUserActionTypes.TRIGGER, fetchUserSaga),
];

function* rootSaga() {
  yield all([...usersSagas]);
}

export default rootSaga;
