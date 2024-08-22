import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  show: IShowDetails = {
    name: 'Friends',
    premiered: new Date(1994, 9, 22),
    ended: new Date(2004, 5, 6),
    description: 'Popular American television sitcom.',
    image: 'https://uniathenaprods3.uniathena.com/s3fs-public/insights-article/seriesreview-e2-80-9cfriends-e2-80-9d_0.jpg',
    genres: ['Comedy', 'Romance'],
    language: 'English',
    rating: 96
  }
}
