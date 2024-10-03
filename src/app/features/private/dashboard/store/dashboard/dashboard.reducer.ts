import { createReducer, on } from '@ngrx/store';
import { initialState } from './dashboard.state';
import {
  loadDashboard,
  loadDashboardFailure,
  loadDashboardSuccess,
} from './dashboard.actions';

export const dashboardReducer = createReducer(
  initialState,
  on(loadDashboard, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadDashboardSuccess, (state, { dashboard }) => ({
    ...state,
    dashboard,
    loading: false,
  })),
  on(loadDashboardFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
