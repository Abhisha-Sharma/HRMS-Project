import { createAction, props } from '@ngrx/store';
import { Dashboard } from '../../types/leave-summary.interface';

export const loadDashboard = createAction('[Load Dashboard] Load Dashboard');

export const loadDashboardSuccess = createAction(
  '[Load Dashboard] Load Dashboard Success',
  props<{ dashboard: Dashboard[] }>()
);

export const loadDashboardFailure = createAction(
  '[Load Dashboard] Load Dashboard Failure',
  props<{ error: string }>()
);
