// address.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddressState } from './address.state';

export const selectAddressState = createFeatureSelector<AddressState>('address');

export const selectAddress = createSelector(
    selectAddressState,
    (state: AddressState) => state.address
);

export const selectAddressLoading = createSelector(
    selectAddressState,
    (state: AddressState) => state.loading
);

export const selectAddressError = createSelector(
    selectAddressState,
    (state: AddressState) => state.error
);
