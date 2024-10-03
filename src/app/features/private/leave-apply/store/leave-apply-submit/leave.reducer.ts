import { createReducer, on } from '@ngrx/store';
import { LeaveApplyBody } from '../../types/leave-apply';
import {
  submitLeaveForm,
  submitLeaveFormFail,
  submitLeaveFormSuccess,
} from './leave.actions';

export interface LeaveState {
  leaveData: LeaveApplyBody[];
  loading: boolean;
  error: string | null;
}
export const initialState: LeaveState = {
  leaveData: [],
  loading: false,
  error: null,
};

export const leaveReducer = createReducer(
  initialState,
  on(submitLeaveForm, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(submitLeaveFormSuccess, (state, { leaveData }) => ({
    ...state,
    leaveData: [...state.leaveData, leaveData],
    loading: false,
  })),
  on(submitLeaveFormFail, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
