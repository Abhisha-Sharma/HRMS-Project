import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../model/dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: DialogData,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    // console.log(this.data);
  }

  onButtonClick(action: () => void) {
    // console.log('hu')
    action();
    this.dialogRef.close();
  }
}
