import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DepartmentAction from './department.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DepartmentService } from '../../../services/add-staff-dropdownService/department-service/department.service';

@Injectable()
export class DepartmentEffects {
  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentAction.loadDepartments),
      mergeMap(() =>
        this.departmentService.getDeparmentList().pipe(
          map((departments) =>
            DepartmentAction.loadDepartmentsSucess({
              departments: departments.data,
            })
          ),
          catchError((error) =>
            of(
              DepartmentAction.loadDepartmentsFailure({ error: error.message })
            )
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private departmentService: DepartmentService
  ) {}
}
