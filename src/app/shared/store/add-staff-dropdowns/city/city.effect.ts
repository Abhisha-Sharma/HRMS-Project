import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as CityActions from './city.actions';
import { CityService } from '../../../services/add-staff-dropdownService/city-service/city.service';
@Injectable()
export class CityEffects {
  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityActions.loadCities),
      mergeMap((action) =>
        this.cityService.getCityListByCountryId(action.countryId).pipe(
          map((cityList) =>
            CityActions.loadCitiesSuccess({ cities: cityList.data })
          ),
          catchError((error) =>
            of(CityActions.loadCitiesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private cityService: CityService) {}
}
