import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_IMAGE, FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCCESS } from './profile-image.action';
import { LeaveConfirmationService } from '../../service/leave-confirmation.service';

@Injectable()
export class ImageEffects {
  constructor(private actions$: Actions, private imageService: LeaveConfirmationService) {}

  fetchImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_IMAGE),
      mergeMap(action =>
        this.imageService.fetchImage(action.id).pipe(
          map(imageData => FETCH_IMAGE_SUCCESS({ imageData })),
          catchError(error => of(FETCH_IMAGE_FAILURE({ error })))
        )
      )
    )
  );
}
