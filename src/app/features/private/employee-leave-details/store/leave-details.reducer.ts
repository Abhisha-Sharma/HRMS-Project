import { createReducer, on } from '@ngrx/store';
import { ILeaveDetailsData } from '../types/types';
import { fetchLeaveDetails, fetchLeaveDetailsFailure, fetchLeaveDetailsSuccess } from './leave-details.actions';

export interface LeaveState {
  leaveDetails: ILeaveDetailsData[];  
  loading: boolean;                    
  error: string | null;                
}

// Initial state for the store
export const initialState: LeaveState = {
  leaveDetails: [],
  loading: false,
  error: null
};

export const leaveReducer = createReducer(
  initialState,
  
  on(fetchLeaveDetails, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(fetchLeaveDetailsSuccess, (state, { leaveDetails }) => ({
    ...state,
    leaveDetails,
    loading: false,
    error: null
  })),

  on(fetchLeaveDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
