import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDetails } from './models/profile-details';
import { ProfileDetailsState } from './store/profile-details.state';
import {
  selectProfileDetails,
  selectProfileDetailsDataError,
  selectProfileDetailsDataLoading,
} from './store/profile-details.selector';
import { FETCH_PROFILE_DETAILS_ACTION } from './store/profile-details.action';
import { UploadPictureDialogComponent } from './components/upload-picture-dialog/upload-picture-dialog.component';
import { ImageState } from '../leave-confirmation-page/store/profile-image/profile-image.reducer';
import { FETCH_IMAGE } from '../leave-confirmation-page/store/profile-image/profile-image.action';
import { selectImageData } from '../leave-confirmation-page/store/profile-image/profile-image.selector';
import { ImageData } from '../leave-confirmation-page/types/types';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent implements OnInit {
  paramProfileId: string | null = null;
  profileDetails$: Observable<ProfileDetails | null> = of(null);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  imageName: string | null = null;

  profilePicture$: Observable<ImageData | null> = of();
  loadingProfilePicture$: Observable<boolean> = of(false);
  errorProfilePicture$: Observable<string | null> = of(null);

  constructor(
    private store: Store<ProfileDetailsState>,
    private profilePictureStore: Store<ImageState>,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  selectorInitializer(): void {
    this.profileDetails$ = this.store.select(selectProfileDetails);
    this.loading$ = this.store.select(selectProfileDetailsDataLoading);
    this.error$ = this.store.select(selectProfileDetailsDataError);
    this.profilePicture$ = this.profilePictureStore.select(selectImageData);
    // this.profileDetails$.subscribe((data) => console.log(data));
    this.profilePicture$.subscribe({
      next: (res) => {
        // console.log(res);
        this.imageName = res?.imageName || null;
      },
    });
  }

  ngOnInit(): void {
    this.paramProfileId = this.route.snapshot.params['id'];
    this.store.dispatch(
      FETCH_PROFILE_DETAILS_ACTION({ profileId: this.paramProfileId ?? '' })
    );
    this.profilePictureStore.dispatch(
      FETCH_IMAGE({ id: this.paramProfileId ?? '' })
    );
    this.selectorInitializer();
  }

  onEditProfileDetails(id: string | number): void {
    this.router.navigate(['/admin/profile-details/edit-profile', id]);
  }

  onChangePicture(): void {
    const dialogRef = this.dialog.open(UploadPictureDialogComponent, {
      width: '600px',
      data: { imageName: this.imageName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // console.log(result);
      } else {
        // console.log('closes');
      }
    });
  }

  onChangePassword() {
    this.router.navigate(['/change-password']);
  }
}
