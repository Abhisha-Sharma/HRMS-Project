import { CountryData } from '../../../models/country.interface';

export interface CountryState {
  countries: CountryData[];
  loading: boolean;
  error: string | null;
}

export const initialCountryState: CountryState = {
  countries: [],
  loading: false,
  error: null,
};
