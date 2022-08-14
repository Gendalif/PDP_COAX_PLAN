import apisauce, {ApisauceInstance} from 'apisauce';

import CONFIG from '../../config/env';
import {
  IApiGetMealByIdPayload,
  IApiGetMealsByLimitPayload,
} from './api-payload.types';
import {DEFAULT_API_HEADERS} from './api.data';

class Api {
  private client: ApisauceInstance;

  constructor(baseURL = CONFIG.API_URL) {
    this.client = apisauce.create({
      baseURL,
      timeout: 10000,
      headers: DEFAULT_API_HEADERS,
    });
  }

  getMealsByLimit = (params: IApiGetMealsByLimitPayload) =>
    this.client.get(`/meals/limit/4/offset/${params.offset}`);

  getMealById = (params: IApiGetMealByIdPayload) =>
    this.client.get(`/meals/${params.id}`);
}

export const apiInstance = new Api();

export default Api;
