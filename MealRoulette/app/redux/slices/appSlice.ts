import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import _ from 'lodash';

import {ErrorType, LoadingType, SuccesType} from '../../utils';
import {mealSlice} from './mealSlice';

export interface IAppState {
  loading: Record<LoadingType, boolean>;
  errors: Record<ErrorType, string | null>;
  success: Record<SuccesType, boolean | null>;
}

const INITIAL_STATE: IAppState = {
  loading: {
    isFetchingAllMeals: false,
  },
  errors: {
    fetchAllMealsError: null,
  },
  success: {
    isFetchedMealsSuccess: false,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setError(
      state,
      {
        payload: {error, errorType},
      }: PayloadAction<{errorType: ErrorType; error: string}>,
    ) {
      state.errors[errorType] = error;
    },
    resetErrors(state) {
      state.errors = _.cloneDeep(INITIAL_STATE.errors);
    },
    resetSucces(state) {
      state.success = _.cloneDeep(INITIAL_STATE.success);
    },
  },
  extraReducers: builder => {
    builder.addCase(mealSlice.actions.getMealsByLimit, state => {
      state.loading[LoadingType.isFetchingAllMeals] = true;
      state.errors[ErrorType.fetchAllMealsError] = null;
      state.success[SuccesType.isFetchedMealsSuccess] = false;
    });
    builder.addCase(mealSlice.actions.getMealsByLimitSuccess, state => {
      state.loading[LoadingType.isFetchingAllMeals] = false;
      state.errors[ErrorType.fetchAllMealsError] = null;
      state.success[SuccesType.isFetchedMealsSuccess] = true;
    });
    builder.addCase(mealSlice.actions.getMealsByLimitError, (state, action) => {
      state.errors[ErrorType.fetchAllMealsError] = action.payload;
      state.loading[LoadingType.isFetchingAllMeals] = false;
      state.success[SuccesType.isFetchedMealsSuccess] = false;
    });
  },
});
