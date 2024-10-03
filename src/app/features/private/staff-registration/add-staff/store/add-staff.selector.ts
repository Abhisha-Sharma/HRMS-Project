import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StaffState } from './add-staff.state';
import { selectCountryState } from '@shared/store/add-staff-dropdowns/country/country.selector';
import { selectAllCities } from '@shared/store/add-staff-dropdowns/city/city.selector';
import { selectAllDepartments } from '@shared/store/add-staff-dropdowns/department/department.selector';
import { selectAddress } from '@shared/store/address-by-Id/address.selector';
import { getDate } from '../transformer/staff-register-payload.transformer';
import { selectAllRoles, selectRoleState } from '@shared/store/add-staff-dropdowns/role/role.selctor';
import { el } from '@fullcalendar/core/internal-common';

export const selectStaffState = createFeatureSelector<StaffState>('staffss');
export const selectStaffDetails = createSelector(
  selectStaffState,
  (state: StaffState) => state.staffDetails
);

export const selectStaffLoading = createSelector(
  selectStaffState,
  (state: StaffState) => state.loading
);

export const selectStaffError = createSelector(
  selectStaffState,
  (state: StaffState) => state.error
);

export const allowPatch = createSelector(
  selectStaffState,
  (state: StaffState) => state.status
);
export const selectDataToPatch = createSelector(
  selectStaffState,
  allowPatch,
  (state, isReady) => {
    if (isReady) {
      return state.staffDetails
    }
    else {
      return undefined
    }
  }
);

export const selectToPatchStaffData = createSelector(
  selectDataToPatch,
  selectAddress,
  selectCountryState,
  selectAllCities,
  selectAllDepartments,
  selectAllRoles,
  (staff, address, countries, cities, deparments, roles) => {
    if (staff) {
      return {
        firstName: staff?.firstName,
        middleName: staff?.middleName,
        lastName: staff?.lastName,
        mobileNo: staff?.mobileNo,
        gender: staff?.gender.toString(),
        dob: getDate(staff?.dob ?? ''),
        address: address?.name,
        nationality: staff?.nationality,
        citizenshipNo: staff?.citizenshipNo,
        startDate: getDate(staff?.startDate ?? ''),
        departmentId: deparments.find(deparment => deparment.id === staff?.departmentId),
        role: roles.find(role => role.value === staff?.role),
        email: staff?.email,
        city: cities.find(city => city.id === address?.cityId),
        country: countries.countries.find(country => country.id === address?.countryId),
      }


    }
    else {
      return undefined
    }

  }
);
