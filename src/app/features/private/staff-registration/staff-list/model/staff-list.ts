export interface StaffList {
  id: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  mobileNo?: string;
  gender?: number;
  dob?: string;
  address?: string;
  nationality?: string;
  citizenshipNo?: string;
  startDate?: string;
  departmentId?: number;
  role?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  actions?: unknown;
}

export interface StaffListForTable extends StaffList {
  SN: string
}
