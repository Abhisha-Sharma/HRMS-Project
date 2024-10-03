import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AddressActions from './address.actions';
import { AddressService } from '@shared/services/add-staff-dropdownService/addredd-service/address.service';

@Injectable()
export class AddressEffects {
    loadAddressById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AddressActions.loadAddressById),
            mergeMap(({ addressId }) =>
                this.addressService.getAddressById(addressId).pipe(
                    map(address => AddressActions.loadAddressByIdSuccess({ address: address.data })),
                    catchError(error => of(AddressActions.loadAddressByIdFailure({ error: error.message })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private addressService: AddressService) { }
}
