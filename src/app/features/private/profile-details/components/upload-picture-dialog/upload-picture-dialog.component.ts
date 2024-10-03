import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UploadPictureService } from '../../services/upload-picture/upload-picture.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-picture-dialog',
  templateUrl: './upload-picture-dialog.component.html',
  styleUrl: './upload-picture-dialog.component.scss',
})
export class UploadPictureDialogComponent {
  selectedFile: File | null = null;
  imageName: string | null = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { imageName: string | null },
    public dialogRef: MatDialogRef<UploadPictureDialogComponent>,
    private uploadPictureService: UploadPictureService,
    private snackBar: MatSnackBar
  ) {
    this.imageName = data.imageName;
  }

  get uploadPictureForm(): FormGroup {
    return this.uploadPictureService.uploadPictureForm;
  }
  ngOnInit(): void {
    this.uploadPictureForm.reset();
  }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        this.snackBar.open(
          'Please upload jpg, jpeg image files only!',
          'Close',
          {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          }
        );
        return;
      }

      if (file.size > 1000000) {
        // Example: 1MB file size limit
        this.snackBar.open('Image size must be less than 1MB', 'Close', {
          duration: 8000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        return;
      }
      this.selectedFile = file;
    }
  }
  onSubmit(): void {
    if (!this.selectedFile) {
      this.snackBar.open('Select Image to Upload', 'Close', {
        duration: 8000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      return;
    }
    const upload = this.uploadPictureService.uploadEmployeePicture(
      this.selectedFile
    );
    const edit = this.uploadPictureService.editEmployeePicture(
      this.selectedFile
    );
    (!!this.imageName ? edit : upload).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
        this.snackBar.open(res.message, 'Close', {
          duration: 8000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
      },
      error: (error: Error) => {
        this.dialogRef.close(true);
        this.snackBar.open(error.message, 'Close', {
          duration: 8000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        console.error('Upload failed', error);
      },
      complete: () => {
        // window.location.reload();
      },
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
    this.uploadPictureForm.reset();
  }
}
