import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetails } from './ishow-details';
import { IShowDetailsData } from './ishow-details-data';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) {}

    getShowDetails(showName: string){
      return this.httpClient.get<IShowDetailsData>(`https://api.tvmaze.com/search/shows?q=${showName}`) //to add API call, e.g. &appID=${environment.appID} at end; then add environments to imports & add API key to environments
    }
   
}
