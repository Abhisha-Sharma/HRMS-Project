import { createReducer, on } from '@ngrx/store';
import { FETCH_IMAGE, FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCCESS } from './profile-image.action';
import { ImageData } from '../../types/types';

export interface ImageState {
  imageData: ImageData | null;
  loading: boolean;
  error: any;
}

export const initialState: ImageState = {
  imageData: null,
  loading: false,
  error: null,
};

export const ImageReducer = createReducer(
  initialState,
  on(FETCH_IMAGE, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(FETCH_IMAGE_SUCCESS, (state, { imageData }) => ({
    ...state,
    loading: false,
    imageData,
    error: null
  })),

  on(FETCH_IMAGE_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
