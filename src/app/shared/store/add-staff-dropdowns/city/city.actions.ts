import { createAction, props } from '@ngrx/store';
import { CityData } from '../../../models/city.interface';

export const loadCities = createAction(
  '[City] Load Cities',
  props<{ countryId: number }>()
);

export const loadCitiesSuccess = createAction(
  '[City] Load Cities Success',
  props<{ cities: CityData[] }>()
);

export const loadCitiesFailure = createAction(
  '[City] Load Cities Failure',
  props<{ error: string }>()
);
