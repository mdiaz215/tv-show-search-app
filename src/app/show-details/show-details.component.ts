import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  show: IShowDetails = {
    name: 'string',
    yearStart: new Date(),
    yearEnd: new Date(),
    description: 'string',
    image: '' 
  };
  constructor () {
  }
}
