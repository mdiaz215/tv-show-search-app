import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(name:string) {
    return this.httpClient.get<IShowDetailsData[]>(`https://api.tvmaze.com/search/shows?q=${name}`).pipe(
      map((dataArray) => {
        if (dataArray.length >0) {
          return this.transformToIShowDetails(dataArray[0]);
        } else {
          return {
            name: 'No show found',
            yearStart: 0,
            yearEnd: 0,
            description: 'No description available',
            image: ''
          };
        }
      })
    );
  }


  private transformToIShowDetails(data:IShowDetailsData): IShowDetails{
    const plainTextDescription = data.show.summary.replace(/<\/?[^>]+(>|$)/g, ""); // removes HTML tags
    return {
      name: data.show.name,
      yearStart: new Date(data.show.premiered).getFullYear(),  
      yearEnd: new Date(data.show.ended).getFullYear(),
      description: plainTextDescription,
      image: data.show.image.medium
    };
  }
  
}
