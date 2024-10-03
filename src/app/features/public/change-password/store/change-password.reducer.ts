import { createReducer, on } from "@ngrx/store";
import { changePassword, changePasswordFailure, changePasswordSuccess } from "./change-password.action";

export interface changePasswordState{
  loading : boolean;
  success : boolean;
  error : string;
}

export const initialState : changePasswordState={
  loading : false,
  success : false,
  error : '',
}

export const changePasswordReducer = createReducer(
  initialState,
  on(changePassword,(state)=>({...state,loading:true,error:''})),
  on(changePasswordSuccess,(state)=>({...state,loading:false,success:true})),
  on(changePasswordFailure,(state)=>({...state,loading:false,error:'Invalid credential'})),
)
