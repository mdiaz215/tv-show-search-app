import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private httpClient: HttpClient) { }

  getTvShows(query: string) {
    this.httpClient.get<IShowDetailsData>(`https://api.tvmaze.com/search/shows?q=${query}`)
  }

  private transformToIShowDetails(data: IShowDetailsData): IShowDetails{
  return {
     name: data.show.name,
     language: data.show.language,
     genres: data.show.genres,
     premiered: new Date(data.premiered*1000),
     ended: new Date(data.ended*1000),
     rating: data.rating.average,
     image: `https://static.tvmaze.com/uploads/images/original_untouched/41/${data.image.original}.jpg`,
     description: data.summary
  }
  }
}
