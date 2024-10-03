import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckedInStatusState } from './checkin-in.state';

export const selectCheckCheckedInStatusStore =
  createFeatureSelector<CheckedInStatusState>('checkedInStatus');

export const selectCheckCheckedInStatusData = createSelector(
  selectCheckCheckedInStatusStore,
  (state: CheckedInStatusState) => state.checkedInStatus
);

export const selectCheckCheckedInStatusDataLoading = createSelector(
  selectCheckCheckedInStatusStore,
  (state: CheckedInStatusState) => state.loading
);

export const selectCheckCheckedInStatusDataError = createSelector(
  selectCheckCheckedInStatusStore,
  (state: CheckedInStatusState) => state.error
);
