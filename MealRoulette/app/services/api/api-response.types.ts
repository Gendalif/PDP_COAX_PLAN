import {ApiResponse} from 'apisauce';
import {IMeal, IMealInfo} from '../../redux/models/IMeal';

export interface IApiGetMealsByLimitSuccessResponse {
  meal_roulette_app_meals_aggregate: {
    nodes: IMeal[];
  };
}

export type IErrorResponse = {
  error?: string;
};

export type GetMealsByLimitResponse = ApiResponse<
  IApiGetMealsByLimitSuccessResponse & IErrorResponse
>;

export interface IApiGetMealByIdSuccessResponse {
  meal_roulette_app_meals_by_pk: IMealInfo;
}

export type GetMealByIdResponse = ApiResponse<
  IApiGetMealByIdSuccessResponse & IErrorResponse
>;
