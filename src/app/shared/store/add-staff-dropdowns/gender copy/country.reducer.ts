// import { createReducer, on } from '@ngrx/store';
// import * as CountryActions from './country.actions';
// import { initialCountryState } from './country.state';

// export const countryReducer = createReducer(
//   initialCountryState,
//   on(CountryActions.loadCountries, (state) => ({
//     ...state,
//     loading: true,
//     error: null,
//   })),
//   on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
//     ...state,
//     loading: false,
//     countries,
//     error: null,
//   })),
//   on(CountryActions.loadCountriesFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );
