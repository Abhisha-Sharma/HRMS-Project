import { createAction, props } from '@ngrx/store';
import { LeaveTableData } from '../../types/leave-table';

export const LEAVE_TABLE_DATA = createAction('[ leave table ] get data', props<{ employeeId: number}>());
export const LEAVE_TABLE_DATA_SUCCESS = createAction(
  '[ leave table ] get data success',
  props<{ leaveData: LeaveTableData[] }>()
);
export const LEAVE_TABLE_DATA_FAILURE = createAction(
  '[leave table] get data failure',
  props<{ error: string }>()
);
