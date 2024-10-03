import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImageState } from './profile-image.reducer';

export const selectImageState = createFeatureSelector<ImageState>('image');

export const selectImageData = createSelector(
  selectImageState,
  (state: ImageState) => state.imageData
);

export const selectImageLoading = createSelector(
  selectImageState,
  (state: ImageState) => state.loading
);

export const selectImageError = createSelector(
  selectImageState,
  (state: ImageState) => state.error
);
