import { createAction, props } from '@ngrx/store';
import { CountryData } from '../../../models/country.interface';

export const loadCountries = createAction('[Country] Load Countries');

export const loadCountriesSuccess = createAction(
  '[Country] Load Countries Success',
  props<{ countries: CountryData[] }>()
);

export const loadCountriesFailure = createAction(
  '[Country] Load Countries Failure',
  props<{ error: string }>()
);
