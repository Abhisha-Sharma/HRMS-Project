
export interface DeleteEmployeeState {
    loading: boolean;
    error: string;
}

export const initialDeleteState: DeleteEmployeeState = {
    loading: false,
    error: ''
};