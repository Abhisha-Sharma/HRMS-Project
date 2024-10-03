import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  FETCH_PROFILE_DETAILS_ACTION,
  FETCH_PROFILE_DETAILS_FAILURE,
  FETCH_PROFILE_DETAILS_SUCCESS,
} from './profile-details.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProfileDetailsService } from '../services/profile.service';

@Injectable()
export class ProfileDetailsEffect {
  fetchProfileDetails = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_PROFILE_DETAILS_ACTION),
      mergeMap(({ profileId }) =>
        this.profileDetailsService.getProfileDetailsById(profileId).pipe(
          map((response) => {
            // console.log(response.data);
            return FETCH_PROFILE_DETAILS_SUCCESS({
              profileDetails: response.data,
            });
          }),
          catchError((error) =>
            of(FETCH_PROFILE_DETAILS_FAILURE({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private action$: Actions,
    private profileDetailsService: ProfileDetailsService
  ) {}
}
