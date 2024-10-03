import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss']
})
export class PolicyFormComponent implements OnInit {
  policy: Policy = { id: '0', title: '', category: '', content: '' };
  isEditMode = false;

  constructor(
    private policyService: PolicyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.policyService.getPolicy(id).subscribe((data) => {
        this.policy = data;
      });
    }
  }

  savePolicy(): void {
    if (this.isEditMode) {
      this.policyService.updatePolicy(this.policy.id.toString(), this.policy).subscribe(() => {
        this.router.navigate(['admin/policies/policy-list']);
      });
    } else {
      this.policyService.addPolicy(this.policy).subscribe(() => {
        this.router.navigate(['admin/policies/policy-list']);
      });
    }
  }
}
