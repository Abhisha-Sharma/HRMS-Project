import { createAction, props } from '@ngrx/store';
import { StaffList } from '../model/staff-list';
import { RegisterStaffPayload } from '../../add-staff/model/add-staff';
// import { RegisterStaffPayload } from '../../add-staff/model/add-staff';

export const loadStaffList = createAction('[Staff List] Load StaffList');

export const loadStaffListSuccess = createAction(
  '[Staff List] Load StaffList Success',
  props<{ staff: StaffList[] }>()
);

export const loadStaffListFailure = createAction(
  '[Staff List] Load StaffList Failure',
  props<{ error: string }>()
);

export const getStaffDetailsById = createAction(
  '[Staff List] edit StaffListDetails',
  props<{ id: string | number; }>()
);
export const getStaffDetailsByIdSucess = createAction(
  '[Staff List] edit StaffListDetails Sucess',
  props<{ staff: RegisterStaffPayload }>()
);
export const getStaffDetailsByIdFailure = createAction(
  '[Staff List] edit StaffListDetails Failure',
  props<{ error: string }>()
);
// export const updateStaffDetails = createAction('[Staff List] update StaffListDetails',
//   props<{ id: number; staff: RegisterStaffPayload }>()
// );
// export const updateStaffDetailsSucess = createAction('[staff List]update StaffDetails Sucess',
//   props<{ sucess: boolean }>()
// );
// export const updateStaffDetailsFailure = createAction('[staff List]update StaffDetails Failure',
//   props<{ error: string }>()
// );


