import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityDataState } from './city.state';

export const selectCityState = createFeatureSelector<CityDataState>('city');

export const selectAllCities = createSelector(
  selectCityState,
  (state) => state.cities
);

export const selectCityLoading = createSelector(
  selectCityState,
  (state) => state.loading
);
