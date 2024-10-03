import { createReducer, on } from "@ngrx/store";
import { initialRoleState } from "./role.state";
import * as RoleAction from './role.actions'
export const roleReducer = createReducer(
    initialRoleState,
    on(RoleAction.loadRoles, (state,) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(RoleAction.loadRolesSucess, (state, { roles }) => {
        // console.log(roles)
        return ({
            ...state,
            loading: false,
            roles,
            error: null,

        })
    }),
    on(RoleAction.loadRolesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
)