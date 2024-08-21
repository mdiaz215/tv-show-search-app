import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowdetailsService {

  constructor(private httpClient: HttpClient) { }

  getShowDetails(name:string, summary:string){
    this.httpClient.get(" https://api.tvmaze.com/search/shows?q=name,")
  }
}
