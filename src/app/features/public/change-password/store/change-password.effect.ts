import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/services/auth.service';
import {
  changePassword,
  changePasswordFailure,
  changePasswordSuccess,
} from './change-password.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ChangePasswordEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  changePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changePassword),
      mergeMap(({ currentPassword, newPassword }) =>
        this.authService.changePassword(currentPassword, newPassword).pipe(
          map((newPassword) => changePasswordSuccess({ newPassword })),
          catchError((error) =>
            of(changePasswordFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
