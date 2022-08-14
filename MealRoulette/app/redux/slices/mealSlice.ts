import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from '../../utils';

import {IMeal, IMealInfo} from '../models/IMeal';
import {
  IGetMealByIdActionPayload,
  IGetMealsByLimitActionPayload,
} from '../types/meal';

interface IMealState {
  mealsData: IMeal[];
  selectedMeal: Nullable<IMealInfo>;
}

const INITIAL_STATE: IMealState = {
  mealsData: [],
  selectedMeal: null,
};

export const mealSlice = createSlice({
  name: 'meals',
  initialState: INITIAL_STATE,
  reducers: {
    getMealsByLimit(_state, _action: IGetMealsByLimitActionPayload) {},
    getMealsByLimitSuccess(state, payload: PayloadAction<IMeal[]>) {
      state.mealsData = payload.payload;
    },
    getMealsByLimitError(_state, _action: PayloadAction<string>) {},

    getMealById(_state, _action: IGetMealByIdActionPayload) {},
    getMealByIdSuccess(state, payload: PayloadAction<IMealInfo>) {
      state.selectedMeal = payload.payload;
    },
    getMealByIdError(_state, _action: PayloadAction<string>) {},
  },
});
