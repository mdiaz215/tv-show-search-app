import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(name:string) {
    this.httpClient.get<IShowDetailsData>(`https://api.tvmaze.com/search/shows?q=${name}`)
  }
  private transformToIShowDetails(data:IShowDetailsData): IShowDetails{
    return {
      name: data.show.name,
      yearStart: data.show.premiered,  
      yearEnd: data.show.ended,
      description: data.summary,
      image: data.image.original
    }
  }
}
