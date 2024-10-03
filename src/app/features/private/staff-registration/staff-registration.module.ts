import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { CountryEffects } from '@shared/store/add-staff-dropdowns/country/country.effects';
import { countryReducer } from '@shared/store/add-staff-dropdowns/country/country.reducer';
import { DepartmentEffects } from '@shared/store/add-staff-dropdowns/department/department.effects';
import { departmentReducer } from '@shared/store/add-staff-dropdowns/department/department.reducer';
import { AddressEffects } from '@shared/store/address-by-Id/address.effects';
import { addressReducer } from '@shared/store/address-by-Id/address.reducer';
import { MaterialsModule } from '../../../materials/materials.module';
import { CityEffects } from '../../../shared/store/add-staff-dropdowns/city/city.effect';
import { cityReducer } from '../../../shared/store/add-staff-dropdowns/city/city.reducer';
import { RolesEffects } from '../../../shared/store/add-staff-dropdowns/role/role.effect';
import { roleReducer } from '../../../shared/store/add-staff-dropdowns/role/role.reducer';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffEffects } from './add-staff/store/add-staff.effects';
import { addAndFetchStaffReducer } from './add-staff/store/add-staff.reducer';
import { UpdateEmployeeEffects } from './add-staff/store/update-staff/update-staff.effect';
import { employeeUpdateReducer } from './add-staff/store/update-staff/update-staff.reducer';
import { StaffListComponent } from './staff-list/staff-list.component';
import { deleteStaffEffects } from './staff-list/store/delete-store/delete-staff.effect';
import { deleteEmployeeReducer } from './staff-list/store/delete-store/delete-staff.reducer';
import { StaffListEffects } from './staff-list/store/staff-list.effects';
import { staffListReducer } from './staff-list/store/staff-list.reducer';
import { StaffRegistrationRoutingModule } from './staff-registration-routing.module';
import { StaffRegistrationComponent } from './staff-registration.component';

@NgModule({
  declarations: [
    StaffRegistrationComponent,
    AddStaffComponent,
    StaffListComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    StaffRegistrationRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,

    EffectsModule.forFeature([
      StaffEffects,
      StaffListEffects,
      CountryEffects,
      DepartmentEffects,
      CityEffects,
      RolesEffects,
      deleteStaffEffects,
      AddressEffects, UpdateEmployeeEffects

    ]),
    StoreModule.forFeature('country', countryReducer),
    StoreModule.forFeature('department', departmentReducer),
    StoreModule.forFeature('city', cityReducer),
    StoreModule.forFeature('roles', roleReducer),
    StoreModule.forFeature('deleteStaff', deleteEmployeeReducer),
    StoreModule.forFeature('address', addressReducer),
    StoreModule.forFeature('updateEmployee', employeeUpdateReducer),
    StoreModule.forFeature('staffss', addAndFetchStaffReducer),
    StoreModule.forFeature('staffList', staffListReducer),
  ],
})
export class StaffRegistrationModule { }
