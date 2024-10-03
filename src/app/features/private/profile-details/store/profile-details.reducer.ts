import { createReducer, on } from '@ngrx/store';
import { initialProfileDetailsState } from './profile-details.state';
import {
  FETCH_PROFILE_DETAILS_ACTION,
  FETCH_PROFILE_DETAILS_FAILURE,
  FETCH_PROFILE_DETAILS_SUCCESS,
} from './profile-details.action';

export const profileDetailsReducer = createReducer(
  initialProfileDetailsState,
  on(FETCH_PROFILE_DETAILS_ACTION, (prevState) => ({
    ...prevState,
    loading: true,
    error: null,
  })),
  on(FETCH_PROFILE_DETAILS_SUCCESS, (prevState, { profileDetails }) => ({
    ...prevState,
    profileDetails,
    loading: false,
  })),
  on(FETCH_PROFILE_DETAILS_FAILURE, (prevState, { error }) => ({
    ...prevState,
    error,
    loading: false,
  }))
);
