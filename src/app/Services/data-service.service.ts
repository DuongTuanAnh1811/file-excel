import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  public headers = new HttpHeaders({
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
  });

  constructor(private http: HttpClient) {}
  public getRandomUser() {
    return this.http.get<any>('https://randomuser.me/api/?results=5', {
      headers: this.headers,
    });
  }
}
