import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CalenderState } from './calender.reducer';

export const selectCalenderState = createFeatureSelector<CalenderState>('calendar');

export const selectCalenderData = createSelector(
  selectCalenderState,
  (state: CalenderState) => state.calenderData
);

export const selectCalenderLoading = createSelector(
  selectCalenderState,
  (state: CalenderState) => state.loading
);

export const selectCalenderError = createSelector(
  selectCalenderState,
  (state: CalenderState) => state.error
);
