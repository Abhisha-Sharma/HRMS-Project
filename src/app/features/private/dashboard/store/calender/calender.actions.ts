import { createAction, props } from '@ngrx/store';
import { ICalenderPayload, ICalenderResponseData } from '../../types/calender';

export const fetchCalenderData = createAction(
  '[Calendar] Fetch Calendar Data',
  props<{ data: ICalenderPayload; id: string | number | null }>()
);

export const fetchCalenderDataSuccess = createAction(
  '[Calendar] Fetch Calendar Data Success',
  props<{ calenderData: ICalenderResponseData[] }>()
);

export const fetchCalenderDataFailure = createAction(
  '[Calendar] Fetch Calendar Data Failure',
  props<{ error: string }>()
);
