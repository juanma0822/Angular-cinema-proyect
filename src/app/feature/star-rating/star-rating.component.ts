import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  imports: [NgbModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  @Input() rating:any;
  @Input() isReadOnly: boolean = false;

  ariaValueText = (value: number) => `${value} out of 5`; // Define ariaValueText
}
