import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
  standalone: true
})
export class ShowDetailsComponent {
  current: IShowDetails = {
    name: '',
    premiered:0,
    ended:0,
    summary: '',
    image: ''
  };
}
