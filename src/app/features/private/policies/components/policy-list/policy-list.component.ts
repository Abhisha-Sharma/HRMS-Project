import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy.model';
import { PolicyState } from '../../store/policy-list/policy-list.state';
import * as PolicyActions from '../../store/policy-list/policy-list.action';
import * as fromPolicy from '../../store/policy-list/policy-list.selector';
import { Router } from '@angular/router';
import { selectAllPolicies } from '../../store/policy-list/policy-list.selector';


@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {
  policies$: Observable<Policy[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;


  constructor(private store: Store<PolicyState>, private router: Router) {
    this.policies$ = this.store.select(selectAllPolicies);
    this.loading$ = this.store.select(fromPolicy.selectPolicyLoading);
    this.error$ = this.store.select(fromPolicy.selectPolicyError);
  }

  ngOnInit(): void {
    this.store.dispatch(PolicyActions.loadPolicies());
    this.policies$.subscribe((data) => {}
  )
  }

  editPolicy(id: string): void {
    this.router.navigate(['admin/policies/edit-policy', id]);
  }

  deletePolicy(id: string): void {
    this.store.dispatch(PolicyActions.deletePolicy({ id }));
  }

  routeToPolicyForm(): void {
    this.router.navigate(['admin/policies/policy-form']);
  }
}
