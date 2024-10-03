import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { DeleteEmployeeService } from "../../service/delete-employee/delete-employee.service";
import { deleteEmployee, deleteEmployeeFailure, deleteEmployeeSuccess } from "./delete-staff.actions";
import { loadStaffList } from "../staff-list.actions";

@Injectable()
export class deleteStaffEffects {
    deleteStaffDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteEmployee),
            switchMap((action) =>
                this.deleteEmployeeService.deleteStaff(action.id).pipe(
                    map(() => deleteEmployeeSuccess()),
                    catchError((error) =>
                        of(
                            deleteEmployeeFailure({
                                error: error.message,
                            })
                        )
                    )
                )
            )
        )
    );
    deleteStaffDetilsSucess$ = createEffect(() =>
        this.actions$.pipe(ofType(deleteEmployeeSuccess),
            map(() => loadStaffList())))


    constructor(private actions$: Actions,
        private deleteEmployeeService: DeleteEmployeeService
    ) { }
}