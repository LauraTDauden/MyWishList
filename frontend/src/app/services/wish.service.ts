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
  getWishById(id){
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }
  createWish(wish){
    return this.httpClient.post(this.endpoint, wish);
  }
  updateWish(wish, id){
    return this.httpClient.put(`${this.endpoint}/${id}`, wish);
  }
  deleteWish(id){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
