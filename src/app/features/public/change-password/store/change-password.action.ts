import { createAction, props } from "@ngrx/store";

export const changePassword = createAction (
  '[changePassword] Change Password',props<{currentPassword:string,newPassword:string}>());

export const changePasswordSuccess = createAction (
  '[changePassword] Change Password Success',props<{newPassword:unknown}>());

export const changePasswordFailure = createAction (
  '[changePassword] Change Password  Failure',props<{error:string}>());
