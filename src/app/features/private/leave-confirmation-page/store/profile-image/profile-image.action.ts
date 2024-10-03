
import { createAction, props } from '@ngrx/store';
import { ImageData } from '../../types/types';

export const FETCH_IMAGE = createAction(
  '[Image] Fetch Image',
  props<{ id: string | number }>()
);

export const FETCH_IMAGE_SUCCESS = createAction(
  '[Image] Fetch Image Success',
  props<{ imageData: ImageData }>()
);

export const FETCH_IMAGE_FAILURE = createAction(
  '[Image] Fetch Image Failure',
  props<{ error: any }>()
);
