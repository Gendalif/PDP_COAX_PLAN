export enum ErrorType {
  fetchAllMealsError = 'fetchAllMealsError',
}

export enum LoadingType {
  isFetchingAllMeals = 'isFetchingAllMeals',
}

export enum SuccesType {
  isFetchedMealsSuccess = 'isFetchedMealsSuccess',
}

export type Nullable<T> = T | null;
