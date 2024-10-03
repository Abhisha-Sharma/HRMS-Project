import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './add-staff.actions';
import {
  addStaff,
  addStaffSuccess,
  addStaffFailure,
} from './add-staff.actions';
import { StaffState, initialState } from './add-staff.state';


export const addAndFetchStaffReducer = createReducer(
  initialState,
  on(addStaff, (state): StaffState => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(addStaffSuccess, (state): StaffState => {
    return ({
      ...state,
      staff: state.staff,
      loading: false,
      error: null,
    })
  }),
  on(addStaffFailure, (state, { error }): StaffState => ({
    ...state,
    loading: false,
    error: error,
    staff: null,
  })),
  on(EmployeeActions.fetchEmployeeData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmployeeActions.fetchEmployeeDataSuccess, (state, { staffDetails }) => {
    return ({
      ...state,
      staff: state.staff,
      loading: false,
      staffDetails
    })
  }),
  on(EmployeeActions.fetchEmployeeDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(EmployeeActions.staffReadyToPatch, (state, { status }) => ({
    ...state,
    status,
    loading: false,
  })),
  on(EmployeeActions.restForm, (state) => ({
    ...initialState
  }))
);
