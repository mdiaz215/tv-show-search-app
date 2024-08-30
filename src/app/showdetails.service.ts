import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IShowDetails } from './ishow-details';

@Injectable({
  providedIn: 'root'
})
export class ShowdetailsService {

  private apiUrl = 'https://api.tvmaze.com/singlesearch/shows?q=';

  constructor(private httpClient: HttpClient) { }

  getShowDetails(name: string): Observable<IShowDetails> {
    const url = `${this.apiUrl}${name}`;
    return this.httpClient.get<any>(url).pipe(
      map(response => this.transformToIShowDetails(response)),
      catchError(error => {
        console.error('Error fetching show details', error);
        return of(this.getDefaultShowDetails());  // Provide a default value in case of error
      })
    );
  }

  private transformToIShowDetails(data: any): IShowDetails {
    if (!data) {
      return this.getDefaultShowDetails();  // Handle case where data is null or undefined
    }
    return {
      name: data.name,
      premiered: new Date(data.premiered),
      ended: data.ended ? new Date(data.ended) : null,
      summary: data.summary,
      image: data.image ? data.image.medium : 'default-image-url' // Ensure image is provided
    };
  }

  private getDefaultShowDetails(): IShowDetails {
    return {
      name: 'Unknown',
      premiered: new Date(),
      ended: null,
      summary: 'No details available',
      image: 'https://via.placeholder.com/150'
    };
  }
}
