import { createAction, props } from '@ngrx/store';
import { AddressById } from '@shared/models/address.interface';
import { ResponseType } from '@shared/models/response.model';

export const loadAddressById = createAction(
    '[Address] Load Address By Id',
    props<{ addressId: number }>()
);

export const loadAddressByIdSuccess = createAction(
    '[Address] Load Address By Id Success',
    props<{ address: AddressById }>()
);

export const loadAddressByIdFailure = createAction(
    '[Address] Load Address By Id Failure',
    props<{ error: string }>()
);
