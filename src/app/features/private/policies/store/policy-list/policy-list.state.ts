import { Policy } from '../../models/policy.model';

export interface PolicyState {
  policies: Policy[];
  loading: boolean;
  error: string | null;
}

export const initialState: PolicyState = {
  policies: [],
  loading: false,
  error: null,
};
