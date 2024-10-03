import { RoleData } from "../../../models/role.interface";

export interface RoleState {
    roles: RoleData[];
    loading: boolean;
    error: string | null;
}
export const initialRoleState: RoleState = {
    roles: [],
    loading: false,
    error: null,
};