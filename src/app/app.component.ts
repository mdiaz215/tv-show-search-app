import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { TvShowsService } from './tv-shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'tv-show-search-app';

  showDetail: IShowDetails = {
    name: '',
    premiered: new Date(),
    ended: new Date(),
    description: '',
    image: '',
    genres: [],
    language: '',
    rating: 0
  }

  constructor(private tvShowsService: TvShowsService){}

  doSearch(searchValue: string){
    const userInput = searchValue
    this.tvShowsService.getTvShows(userInput).subscribe((data: IShowDetails) => this.showDetail = data)
  }
}
