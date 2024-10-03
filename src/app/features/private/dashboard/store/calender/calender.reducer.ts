import { createReducer, on } from '@ngrx/store';
import { fetchCalenderData, fetchCalenderDataSuccess, fetchCalenderDataFailure } from './calender.actions';
import { ICalenderResponseData } from '../../types/calender';

export interface CalenderState {
  calenderData: ICalenderResponseData[];
  loading: boolean;
  error: string | null;
}

export const initialState: CalenderState = {
  calenderData: [],
  loading: false,
  error: null
};

export const calenderReducer = createReducer(
  initialState,

  on(fetchCalenderData, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(fetchCalenderDataSuccess, (state, { calenderData }) => ({
    ...state,
    calenderData,
    loading: false,
    error: null
  })),

  on(fetchCalenderDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
