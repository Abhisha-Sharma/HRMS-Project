import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileDetailsState } from './profile-details.state';

export const profileDetailsStateSelector =
  createFeatureSelector<ProfileDetailsState>('profileDetails');

export const selectProfileDetails = createSelector(
  profileDetailsStateSelector,
  (state: ProfileDetailsState) => state.profileDetails
);

export const selectProfileDetailsDataLoading = createSelector(
  profileDetailsStateSelector,
  (state: ProfileDetailsState) => state.loading
);

export const selectProfileDetailsDataError = createSelector(
  profileDetailsStateSelector,
  (state: ProfileDetailsState) => state.error
);
