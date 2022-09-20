import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  endpoint = 'http://localhost:8080/api/wishes';

  constructor(private httpClient: HttpClient) { }

  getWishes(){
    return this.httpClient.get(this.endpoint);
  }
}
