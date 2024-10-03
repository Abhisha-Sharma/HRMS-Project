import { createReducer, on } from "@ngrx/store";
import { initialAddressState } from "./address.state";
import * as AddressActions from './address.actions';
export const addressReducer = createReducer(
    initialAddressState,
    on(AddressActions.loadAddressById, state => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AddressActions.loadAddressByIdSuccess, (state, { address }) => ({
        ...state,
        address,
        loading: false,
    })),
    on(AddressActions.loadAddressByIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);