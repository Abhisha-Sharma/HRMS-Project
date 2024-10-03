import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
// import { ADD_NEW_EMPLOYEES, APPLY_FOR_LEAVE, ATTENDANCE, EDIT_EMPLOYEE_DETAILS, EMPLOYEE_DETAILS, LEAVE_APPLICATION_STATUS, POLICIES, REMOVE_EMPLOYEES } from '../@shared/constants/routes.constant';
import { ROUTE_CONSTANT } from '@shared/constants/routes.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  showFiller = true;
  
  readonly panelOpenState = signal(false);
  
  route_constant = ROUTE_CONSTANT;
  role?: string|null;
  id?:string|null;
  
  constructor(private router:Router){}
  
  isActiveUrl(url:string):boolean{
    return  this.router.url === url;
  }
  
  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.id = localStorage.getItem('employeeId');
  }
}
