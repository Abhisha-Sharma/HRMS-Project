import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PolicyService } from '../../service/policy.service';
import * as PolicyActions from './policy-list.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PolicyEffects {

  loadPolicies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.loadPolicies),
      mergeMap(() =>
        this.policyService.getPolicies().pipe(
          map(policies => PolicyActions.loadPoliciesSuccess({ policies })),
          catchError(error => of(PolicyActions.loadPoliciesFailure({ error })))
        )
      )
    )
  );

  addPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.addPolicy),
      mergeMap(action =>
        this.policyService.addPolicy(action.policy).pipe(
          map(policy => PolicyActions.addPolicySuccess({ policy })),
          catchError(error => of(PolicyActions.addPolicyFailure({ error })))
        )
      )
    )
  );

  updatePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.updatePolicy),
      mergeMap(action =>
        this.policyService.updatePolicy(action.id, action.policy).pipe(
          map(policy => PolicyActions.updatePolicySuccess({ policy })),
          catchError(error => of(PolicyActions.updatePolicyFailure({ error })))
        )
      )
    )
  );

  deletePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PolicyActions.deletePolicy),
      mergeMap(action =>
        this.policyService.deletePolicy(action.id).pipe(
          map(() => PolicyActions.deletePolicySuccess({ id: action.id })),
          catchError(error => of(PolicyActions.deletePolicyFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private policyService: PolicyService) {}
}
