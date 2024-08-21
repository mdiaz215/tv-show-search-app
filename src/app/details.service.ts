import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IShowDetails } from './ishow-details';
import { IShowDetailsData } from './ishow-details-data';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

    getShowDetails(showName: string){
      return this.httpClient.get<IShowDetailsData>(`https://api.tvmaze.com/search/shows?q=${showName}`).pipe(
        map(data => this.transformToIShowDetails(data)));
    }

    private transformToIShowDetails(data: IShowDetailsData): IShowDetails{
      return {
        showName: data.show.name,
        yearStart: new Date(data.show.premiered).getFullYear(), //extracts year from date
        yearEnd: new Date(data.show.ended).getFullYear(), //extracts year from date 
        description: data.show.summary,
        image: data.show.image.medium
      };
    }
   
}
