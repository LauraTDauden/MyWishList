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
  createWish(wish, blob){
    let formData = new FormData();
    formData.append("item", wish.item);
    formData.append("description", wish.description);
    formData.append("filename", blob);
    return this.httpClient.post(this.endpoint, formData);
  }
  updateWish(wish, id, blob){
    let formData = new FormData();
    formData.append("item", wish.item);
    formData.append("description", wish.description);
    formData.append("filename", blob);
    return this.httpClient.put(`${this.endpoint}/${id}`, formData);
  }
  deleteWish(id){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
