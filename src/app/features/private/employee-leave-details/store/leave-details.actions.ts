import { createAction, props } from '@ngrx/store';
import { ILeaveDetailsData } from '../types/types';

export const fetchLeaveDetails = createAction('[Leave Details] Fetch Leave Details');

export const fetchLeaveDetailsSuccess = createAction(
  '[Leave Details] Fetch Leave Details Success',
  props<{ leaveDetails: ILeaveDetailsData[] }>()
);

export const fetchLeaveDetailsFailure = createAction(
  '[Leave Details] Fetch Leave Details Failure',
  props<{ error: string }>()
);
