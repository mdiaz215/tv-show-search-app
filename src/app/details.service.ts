import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IShowDetails } from './ishow-details';
import { IShowDetailsData } from './ishow-details-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(search: string | number) { //Updated to allow for case when a show starts with a number
      let uriParams = '';

      if (typeof search === 'string') {
        uriParams = `'q=${encodeURIComponent(search)}`;// Encode the string to handle special characters
      } else if (typeof search === 'number') {
        uriParams = `q=${search}`;// Convert the number to string implicitly
      }
    
    return this.httpClient.get<IShowDetailsData[]>(`https://api.tvmaze.com/search/shows?${uriParams}`).pipe(
      map((dataArray) => {
        if (dataArray.length > 0) {
          // Transform the first result in the array
          return this.transformToIShowDetails(dataArray[0]);
        } else {
          // Handle no results
          return {
            showName: 'No show found',
            yearStart: 'N/A',
            yearEnd: 'N/A',
            description: 'No description available',
            image: ''
          };
        }
      })
    );
  }
  

  private transformToIShowDetails(data: IShowDetailsData): IShowDetails {
    const plainTextDescription = data.show.summary.replace(/<\/?[^>]+(>|$)/g, ""); // This regex removes HTML tags
  
  // Check if the date exists, otherwise return "N/A"
    const yearStart = data.show.premiered ? new Date(data.show.premiered).getFullYear() : 'N/A';
    const yearEnd = data.show.ended ? new Date(data.show.ended).getFullYear() : 'N/A';
    
    return {
      showName: data.show.name,
      yearStart: yearStart,
      yearEnd: yearEnd,
      description: plainTextDescription,
      image: data.show.image ? data.show.image.medium : ''
    };
  }   
}
