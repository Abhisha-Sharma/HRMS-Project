import { createAction, props } from "@ngrx/store";

export const loadPolicies =createAction('[Policy] Load Policies');
export const loadPoliciesSuccess = createAction('[Policy] Load Policies Success', props<{ policies: any[]}>());
export const loadPoliciesFailure = createAction('[Policy] Load Policies Failure', props<{error:any}>());

export const addPolicy =createAction('[Policy] Add Policy', props<{policy:any}>());
export const addPolicySuccess = createAction ('[Policy] Add Policy Sucess', props<{policy:any}>());
export const addPolicyFailure = createAction ('[Policy] Add Policy Failure',props<{error:any}>());

export const updatePolicy =createAction('[Policy] Update Policy',props<{id:string,policy:any}>());
export const updatePolicySuccess=createAction('[Policy] Update Policy', props<{policy:any}>());
export const updatePolicyFailure=createAction('[Policy] Update Policy Failure',props<{error:any}>());

export const deletePolicy=createAction('[Policy] Delete Policy',props<{id:string}>());
export const deletePolicySuccess=createAction('[Policy] Delete Policy Sucess',props<{id:string}>());
export const deletePolicyFailure=createAction('[Policy] Delete Policy Failure',props<{error:any}>());
