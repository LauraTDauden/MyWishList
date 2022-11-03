import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor( private http: HttpClient) { }

  getMenuOptions(){
    return this.http.get<MenuObject[]>('/assets/data/menu.json')
  }
}
