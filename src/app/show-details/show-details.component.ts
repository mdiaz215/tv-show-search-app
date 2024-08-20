import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  show: IShowDetails = {
    title: 'Friends',
    description: 'Popular American television sitcom',
    image: 'https://uniathenaprods3.uniathena.com/s3fs-public/insights-article/seriesreview-e2-80-9cfriends-e2-80-9d_0.jpg',
    genres: 'Sitcom',
    seasons: 10,
    episodes: 18,
    language: 'English',
  }
}
