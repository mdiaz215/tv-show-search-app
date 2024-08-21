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

  getShowDetails(showName: string) { //from ChatGPT - API response for search/shows is an array, not object. Updated to handle array reponse.
    return this.httpClient.get<IShowDetailsData[]>(`https://api.tvmaze.com/search/shows?q=${showName}`).pipe(
      map((dataArray) => {
        if (dataArray.length > 0) {
          // Transform the first result in the array
          return this.transformToIShowDetails(dataArray[0]);
        } else {
          // Handle no results
          return {
            showName: 'No show found',
            yearStart: 0,
            yearEnd: 0,
            description: 'No description available',
            image: ''
          };
        }
      })
    );
  }
  

  private transformToIShowDetails(data: IShowDetailsData): IShowDetails {
    const plainTextDescription = data.show.summary.replace(/<\/?[^>]+(>|$)/g, ""); // This regex removes HTML tags
  
    return {
      showName: data.show.name,
      yearStart: new Date(data.show.premiered).getFullYear(),
      yearEnd: new Date(data.show.ended).getFullYear(),
      description: plainTextDescription,
      image: data.show.image.medium
    };
  }
  
   
}
