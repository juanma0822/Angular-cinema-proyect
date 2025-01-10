import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    NgModule,
    NgbModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class FeatureModule { }
