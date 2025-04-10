import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'http://localhost:8080/api/courses';
  constructor(private http: HttpClient) { }

  getCourses():  Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/all`,{headers: header});
  }

}
