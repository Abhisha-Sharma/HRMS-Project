import { createReducer, on } from '@ngrx/store';
import { initialState } from './leave-table-state';
import {
  LEAVE_TABLE_DATA,
  LEAVE_TABLE_DATA_FAILURE,
  LEAVE_TABLE_DATA_SUCCESS,
} from './leave-table.actions';

export const leaveTableReducer = createReducer(
  initialState,
  on(LEAVE_TABLE_DATA, (state) => ({
    ...state,
    loading: true,
  })),
  on(LEAVE_TABLE_DATA_SUCCESS, (state, { leaveData }) => {
    return {
      ...state,
      leaveDataTable: leaveData,
      loading: false,
      error: null,
    };
  }),
  on(LEAVE_TABLE_DATA_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
