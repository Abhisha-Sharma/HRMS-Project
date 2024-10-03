import { Dashboard } from '../../types/leave-summary.interface';

export interface DashboardState {
  dashboard: Dashboard[];
  loading: boolean;
  error: string | null;
}

export const initialState: DashboardState = {
  dashboard: [],
  loading: false,
  error: null,
};
