export interface UpdateEmployeeState {
    updating: boolean;
    updateSuccess: boolean | null;
    error: string | null;
}

export const initialUpdateEmployeeState: UpdateEmployeeState = {
    updating: false,
    updateSuccess: null,
    error: null,
};