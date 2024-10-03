import { ProfileDetails } from '../models/profile-details';

export interface ProfileDetailsState {
  profileDetails: ProfileDetails | null;
  loading: boolean;
  error: string | null;
}

export const initialProfileDetailsState: ProfileDetailsState = {
  profileDetails: null,
  loading: false,
  error: null,
};
