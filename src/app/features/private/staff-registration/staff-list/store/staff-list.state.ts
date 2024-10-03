import { StaffList } from '../model/staff-list';

export interface StaffListState {
  staff: StaffList[];
  loading: boolean;
  // updating: boolean;
  // updateSuccess: boolean | null;
  error: string | null;
}

export const initialState: StaffListState = {
  staff: [],
  // updating: false,
  // updateSuccess: false,
  loading: false,
  error: null,
};
