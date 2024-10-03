import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';

export const selectCountryState =
  createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
  selectCountryState,
  (state: CountryState) => state.countries
);

export const selectCountriesLoading = createSelector(
  selectCountryState,
  (state: CountryState) => state.loading
);

export const selectCountriesError = createSelector(
  selectCountryState,
  (state: CountryState) => state.error
);
