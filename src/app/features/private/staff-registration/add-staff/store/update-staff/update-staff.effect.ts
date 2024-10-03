import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { updateEmployee, updateEmployeeFailure, updateEmployeeSuccess } from "./update-staff.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { UpdateStaffService } from "../../service/update-staff/update-staff.service";
import { FormService } from "../../service/form/form.service";
import { restForm } from "../add-staff.actions";
import { Store } from "@ngrx/store";

@Injectable()
export class UpdateEmployeeEffects {

    updateEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateEmployee),
            mergeMap(action =>
                this.updateStaffService.updateEmployeeData(action.employeeId, action.updatedData).pipe(
                    map(response => updateEmployeeSuccess({ data: response.data })),
                    catchError(error => of(updateEmployeeFailure({ error: error.message })))
                )
            )
        )
    );
    updateEmployeeSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(updateEmployeeSuccess), map(() => {
            this.updateStaffService.nagivateTo();
            this.formService.resetForm()
            this.store.dispatch(restForm())

        })
    ),
        {
            dispatch: false,
        }
    )
    constructor(
        private actions$: Actions,
        private updateStaffService: UpdateStaffService,
        private formService: FormService,
        private store: Store,

    ) { }
}
