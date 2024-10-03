import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { select, Store } from '@ngrx/store';
import { loadCities, loadCitiesSuccess } from '@shared/store/add-staff-dropdowns/city/city.actions';
import { loadCountries } from '@shared/store/add-staff-dropdowns/country/country.actions';
import { loadDepartments, loadDepartmentsSucess } from '@shared/store/add-staff-dropdowns/department/department.actions';
import { loadRoles, loadRolesSucess } from '@shared/store/add-staff-dropdowns/role/role.actions';
import { loadAddressById, loadAddressByIdSuccess } from '@shared/store/address-by-Id/address.actions';
import { of, catchError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AddStaffService } from '../service/api/add-staff.service';
import { FormService } from '../service/form/form.service';
import {
  addStaff,
  addStaffFailure,
  addStaffSuccess,
  fetchEmployeeData,
  fetchEmployeeDataFailure,
  fetchEmployeeDataSuccess,
  restForm,
  staffReadyToPatch,
} from './add-staff.actions';
import { selectToPatchStaffData } from './add-staff.selector';

@Injectable()
export class StaffEffects {
  constructor(
    private actions$: Actions,
    private addStaffService: AddStaffService,
    private formService: FormService,
    private store: Store,
    private snackBar: MatSnackBar

  ) { }

  addStaff$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStaff),
      switchMap(({ staff }) => this.addStaffService.postStaff(staff).pipe(
        map(() => addStaffSuccess()),
        catchError((error) => of(addStaffFailure({ error: error.message }))),
      )),
    )
  );

  addStaffSucess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addStaffSuccess),
        map(() => {
          // this.formService.resetForm();
          this.formService.nagivateTo();
          this.store.dispatch(restForm())

        })
      ),
    {
      dispatch: false,
    }
  );
  fetchEmployeeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployeeData),
      switchMap(({ staffId }) =>
        this.addStaffService.getEmployeeData(staffId).pipe(
          map((data) => fetchEmployeeDataSuccess({ staffDetails: data.data })),
          catchError((error) => {
            console.error('Error fetching employee data:', error);
            return of(fetchEmployeeDataFailure({ error: error.message }));
          })
        )
      )
    )
  );


  fetchEmployeeDataSucess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployeeDataSuccess),
      map(({ staffDetails }) => (loadAddressById({ addressId: staffDetails.addressId }))),
    ),
  )

  allowToPatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployeeDataSuccess),
      map(() => (staffReadyToPatch({ status: true }))),
    ),
  )

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(() => {
        return loadCountries()
      })
    ),
  )
  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddressByIdSuccess),
      map(({ address }) => {
        return loadCities({ countryId: address.cityId })
      })
    ),
  )
  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCitiesSuccess),
      map(() => {
        return loadDepartments()
      })
    ),
  )
  loadRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDepartmentsSucess),
      map(() => {
        return loadRoles()
      })
    ),
  )

  patch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadRolesSucess),
        concatLatestFrom(() => this.store.pipe(select(selectToPatchStaffData))),
        map(([_, value]) => {
          if (value) {

            this.formService.getFormValueToPatch(value);
          }
        })
      ),
    { dispatch: false }
  );

  fetchEmployeeDataFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchEmployeeDataFailure),
        map((error) => {
          // console.log(error)
          this.snackBar.open(
            'You are not Checked In, Please check-in!',
            'Close',
            {
              duration: 8000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom',
            }
          );
        })
      ),
    { dispatch: false }
  );
}
