import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstructorQueryModel} from '../../models/instructor-query-model';
@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = 'http://localhost:8080/api/instructors';
  constructor(private http: HttpClient) { }
  getInstructors():  Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/all`,{headers: header});
  }
  deleteInstructors(id: number | undefined): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    console.log(header);
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`,{headers: header});
  }
  getCourses(): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/courses`,{headers: header});
  }

  getInstructorPage(instructorQueryModel : InstructorQueryModel): Observable<any> {
    const token = sessionStorage.getItem('accessToken');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("instructorQueryModel");
    console.log(instructorQueryModel);
    return this.http.post(`${this.apiUrl}/filter`,instructorQueryModel,{ headers: header });
  }

}
