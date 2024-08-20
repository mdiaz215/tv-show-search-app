import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  current: IShowDetails = {
    name: 'Friends',
    yearStart: 1994, //When ready to fetch API data, change to 0
    yearEnd: 2004, //When ready to fetch API data, change to 0
    description: 'Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/41/104565.jpg'
  }


}
