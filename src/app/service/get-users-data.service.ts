import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserModel } from '../models/user.model';
import { IResponseModel } from '../shared/model/generic-response.model';
import { Observable } from 'rxjs/internal/Observable';
import { IResponseArrayModel } from '../shared/model/generic-response-array.model';

@Injectable({
  providedIn: 'root',
})
export class GetUsersDataService {
  url = 'https://localhost:7009/api/Values';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IResponseArrayModel<IUserModel>> {
    return this.http.get<IResponseArrayModel<IUserModel>>(this.url);
  }
  saveUsers(data: IUserModel): Observable<IResponseModel<IUserModel>> {
    return this.http.post<IResponseModel<IUserModel>>(this.url, data);
  }

  getUserById(id: number):Observable<IResponseArrayModel<IUserModel>> {
    return this.http.get<IResponseArrayModel<IUserModel>>(`${this.url}/${id}`);
  }

  updateUser(data: IUserModel): Observable<IResponseModel<IUserModel>> {
    return this.http.put<IResponseModel<IUserModel>>(`${this.url}/${data.id}`, data);
  }

  deleteUser(id: number): Observable<IResponseModel<IUserModel>> {
    return this.http.delete<IResponseModel<IUserModel>>(`${this.url}/${id}`)
}

}
