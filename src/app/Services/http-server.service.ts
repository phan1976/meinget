import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_RANDOM = 'https://randomuser.me/api/?results=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getRandomUsers(users: number): Observable<any> {
    const url = `${this.REST_API_RANDOM}${users}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postData(payload: any):Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}
