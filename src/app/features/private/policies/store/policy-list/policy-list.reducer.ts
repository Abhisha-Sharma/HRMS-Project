import { createReducer, on } from '@ngrx/store';
import {  initialState } from '../../store/policy-list/policy-list.state';
import * as PolicyActions from './policy-list.action';

export const policyReducer = createReducer(
  initialState,
  on(PolicyActions.loadPolicies, state =>
    ({ ...state, loading: true })),
  on(PolicyActions.loadPoliciesSuccess, (state, { policies }) =>
    ({ ...state, loading: false, policies })),
  on(PolicyActions.loadPoliciesFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(PolicyActions.addPolicySuccess, (state, { policy }) =>
    ({...state,policies: [...state.policies, policy]})),
  on(PolicyActions.updatePolicySuccess, (state, { policy }) =>
    ({...state,policies: state.policies.map(p => p.id === policy.id ? policy : p)})),
  on(PolicyActions.deletePolicySuccess, (state, { id }) =>
    ({...state,policies: state.policies.filter(policy => policy.id !== id)
  }))
);
