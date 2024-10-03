export interface DialogButton {
  label: string;
  type: 'mat-primary' | 'mat-warn';
  action: () => void;
}
export interface DialogData {
  titleArray: string[];
  buttonArray: DialogButton[];
}
