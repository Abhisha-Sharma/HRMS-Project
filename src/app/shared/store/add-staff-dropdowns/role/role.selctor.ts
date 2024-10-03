import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoleState } from "./role.state";

export const selectRoleState = createFeatureSelector<RoleState>('roles');
export const selectAllRoles = createSelector(selectRoleState, (state: RoleState) => {
    // console.log(state.roles)
    return state.roles
});
export const selectRolesLoading = createSelector(selectRoleState,
    (state: RoleState) => state.loading
);
export const selectRolesError = createSelector(
    selectRoleState, (state: RoleState) => state.error
);