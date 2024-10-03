export interface CheckedInStatusState {
  loading: boolean;
  error: string | null;
  checkedInStatus: boolean;
}

export const initialCheckedInStatusState: CheckedInStatusState = {
  loading: false,
  error: null,
  checkedInStatus: false,
};
