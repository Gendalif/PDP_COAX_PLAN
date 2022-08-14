import {call, put, takeLatest} from 'redux-saga/effects';
import {IMeal} from '../redux/models/IMeal';
import {mealSlice} from '../redux/slices';
import {
  IGetMealByIdActionPayload,
  IGetMealsByLimitActionPayload,
} from '../redux/types/meal';
import {apiInstance} from '../services/api';
import {
  IApiGetMealByIdPayload,
  IApiGetMealsByLimitPayload,
} from '../services/api/api-payload.types';
import {
  GetMealByIdResponse,
  GetMealsByLimitResponse,
} from '../services/api/api-response.types';
import {StaticNavigator} from '../services/navigator';

function* watchGetAllMeals({
  payload: {offset, limit},
}: IGetMealsByLimitActionPayload) {
  const params: IApiGetMealsByLimitPayload = {
    offset,
    limit,
  };

  const response: GetMealsByLimitResponse = yield call(
    apiInstance.getMealsByLimit,
    params,
  );

  if (response.ok && response.data) {
    yield put(
      mealSlice.actions.getMealsByLimitSuccess(
        response.data.meal_roulette_app_meals_aggregate.nodes,
      ),
    );
  } else {
    const errorMessage = response.data?.error;
    yield put(mealSlice.actions.getMealsByLimitError(errorMessage!));
  }
}

function* watchGetMealById({payload: {id}}: IGetMealByIdActionPayload) {
  const params: IApiGetMealByIdPayload = {id};

  const response: GetMealByIdResponse = yield call(
    apiInstance.getMealById,
    params,
  );

  if (response.ok && response.data) {
    yield put(
      mealSlice.actions.getMealByIdSuccess(
        response.data.meal_roulette_app_meals_by_pk,
      ),
    );
    yield call(StaticNavigator.navigateTo, 'AboutMeal');
  } else {
    const errorMessage = response.data?.error;
    yield put(mealSlice.actions.getMealByIdError(errorMessage!));
  }
}

export function* mealSaga() {
  yield takeLatest(mealSlice.actions.getMealsByLimit, watchGetAllMeals);
  yield takeLatest(mealSlice.actions.getMealById, watchGetMealById);
}
