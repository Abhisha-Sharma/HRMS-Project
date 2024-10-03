import { CityData } from '../../../models/city.interface';

export interface CityDataState {
  cities: CityData[];
  loading: boolean;
  error: string | null;
}

export const initialCityState: CityDataState = {
  cities: [],
  loading: false,
  error: null,
};
