import { CountryData } from '../../../models/country.interface';

export interface GenderState {
  gender: any[];
  loading: boolean;
  error: string | null;
}

export const initialGenderState: GenderState = {
  gender: [],
  loading: false,
  error: null,
};
