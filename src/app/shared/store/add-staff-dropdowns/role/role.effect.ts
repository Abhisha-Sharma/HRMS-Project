import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RolesAction from './role.actions';
import { catchError, map, mergeMap, of } from "rxjs";
import { RoleService } from "../../../services/add-staff-dropdownService/role-service/role.service";

@Injectable()
export class RolesEffects {
    loadRoles$ = createEffect(() =>
        this.action$.pipe(
            ofType(RolesAction.loadRoles),
            mergeMap(() =>
                this.roleService.getRoleList().pipe(
                    map((roles) => {
                        // console.log(roles)
                        return RolesAction.loadRolesSucess({
                            roles: roles.data,
                        })
                    }),
                    catchError((error) =>
                        of(RolesAction.loadRolesFailure({ error: error.message })))
                ))
        ))
    constructor(private action$: Actions,
        private roleService: RoleService
    ) { }
}
