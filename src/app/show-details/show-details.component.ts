import { Component } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { TvShowsService } from '../tv-shows.service';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
  show: IShowDetails = {
    name: '',
    premiered: new Date(),
    ended: new Date(),
    description: '',
    image: '',
    genres: [],
    language: '',
    rating: 0
  }

  constructor(private tvShowsService: TvShowsService) {
    this.tvShowsService.getTvShows('Friends').subscribe((data: IShowDetails) => this.show = data)
  }
}
