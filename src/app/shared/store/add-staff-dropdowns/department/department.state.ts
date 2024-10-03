import { DepartmentData } from '../../../models/department.interface';

export interface DepartmentState {
  departments: DepartmentData[];
  loading: boolean;
  error: string | null;
}
export const initialDepartmentState: DepartmentState = {
  departments: [],
  loading: false,
  error: null,
};
