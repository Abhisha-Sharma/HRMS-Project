import { createAction, props } from '@ngrx/store';
import { ProfileDetails } from '../models/profile-details';

export const FETCH_PROFILE_DETAILS_ACTION = createAction(
  '[Fetch Profile] Fetch Profile Details',
  props<{ profileId: string }>()
);

export const FETCH_PROFILE_DETAILS_SUCCESS = createAction(
  '[Fetch Profile] Fetch Profile Details Success',
  props<{ profileDetails: ProfileDetails }>()
);

export const FETCH_PROFILE_DETAILS_FAILURE = createAction(
  '[Fetch Profile] Fetch Profile Details Failure',
  props<{ error: string }>()
);
