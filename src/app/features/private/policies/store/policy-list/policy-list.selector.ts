import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PolicyState } from './policy-list.state';

export const selectPolicyState = createFeatureSelector<PolicyState>('policy');

export const selectAllPolicies = createSelector(
  selectPolicyState,
  (state: PolicyState) => state.policies
);

export const selectPolicyLoading = createSelector(
  selectPolicyState,
  (state: PolicyState) => state.loading
);

export const selectPolicyError = createSelector(
  selectPolicyState,
  (state: PolicyState) => state.error
);
  