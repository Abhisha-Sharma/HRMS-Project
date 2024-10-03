import { AddressById } from "@shared/models/address.interface";

export interface AddressState {
    address: AddressById | null;
    loading: boolean;
    error: string | null;
}

export const initialAddressState: AddressState = {
    address: null,
    loading: false,
    error: null,
};