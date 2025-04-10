import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/departments';
 constructor(private http: HttpClient) { }

 getDepartments():  Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/get-departments`,{headers: header});
 }
}
