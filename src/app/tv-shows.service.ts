import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private httpClient: HttpClient) { }

  getTvShows(query: string) :Observable<IShowDetails>{
    return this.httpClient.get<IShowDetailsData[]>(`https://api.tvmaze.com/search/shows?q=${query}`).pipe(map(data => this.transformToIShowDetails(data)))
  }

  private transformToIShowDetails(data: IShowDetailsData[]): IShowDetails{
  return {
     name: data[0].show.name,
     language: data[0].show.language,
     genres: data[0].show.genres,
     premiered: new Date(data[0].show.premiered*1000),
     ended: new Date(data[0].show.ended*1000),
     rating: this.getRating(data[0].show.rating.average),
     image: data[0].show.image.original,
     description: data[0].show.summary.replace(/<[^>]*>/g, '')
  }
  }

  private getRating(avgRating : number) : number {
    if(avgRating){
      return avgRating;
    }
    return 0;
  }
}
