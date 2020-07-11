import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000/'
  HttpHeaders = new HttpHeaders ({'content-type':'application/json'})
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<any> {
    return this.http.get(this.baseurl + '/api/product/',
    {headers: this.HttpHeaders})
  }
}
