import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url="http://localhost:8000/products"
  constructor(private http:HttpClient) { }

  productsFromApi(){
    return this.http.get(this.url);
  }
  saveProducts(data:any){
    return this.http.post(this.url,data);
  }
  
}
