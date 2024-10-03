import { createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { initialCityState } from './city.state';

export const cityReducer = createReducer(
  initialCityState,
  on(CityActions.loadCities, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CityActions.loadCitiesSuccess, (state, { cities }) => ({
    ...state,
    cities,
    loading: false,
    error: null,
  })),
  on(CityActions.loadCitiesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
