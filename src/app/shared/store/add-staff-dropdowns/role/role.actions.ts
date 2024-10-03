import { createAction, props } from "@ngrx/store";
import { RoleData } from "../../../models/role.interface";

export const loadRoles = createAction('[Roles] Load Roles');
export const loadRolesSucess = createAction('[Roles] Load Roles Sucess',
    props<{ roles: RoleData[] }>()
);
export const loadRolesFailure = createAction('[Roles] Load Roles Failure',
    props<{ error: string }>()
);

