import {all} from 'redux-saga/effects';

import {mealSaga} from './meal';

export default function* rootSaga() {
  yield all([mealSaga()]);
}
