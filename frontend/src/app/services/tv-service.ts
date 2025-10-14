import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TvService {
  
  endpoint = 'http://localhost:8100/api/tv';

  constructor (private httpClient: HttpClient) { }

    getTv(){

      return this.httpClient.get(this.endpoint);

    }

  
}
