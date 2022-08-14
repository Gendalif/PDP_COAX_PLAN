import {PayloadAction} from '@reduxjs/toolkit';
import {IApiGetMealsByLimitSuccessResponse} from '../../services/api/api-response.types';

import {IMeal} from '../models/IMeal';

export type IGetMealsByLimitActionPayload = PayloadAction<{
  offset: number;
  limit?: number;
}>;

export type IGetMealByIdActionPayload = PayloadAction<{
  id: string;
}>;

export type IGetMealsByLimitSuccessActionPayload =
  IApiGetMealsByLimitSuccessResponse;
