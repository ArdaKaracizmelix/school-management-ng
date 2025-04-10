import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstructorQueryModel} from '../../models/instructor-query-model';
import {StudentQueryModel} from '../../models/student-query-model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/all`, {headers: header});
  }

  deleteStudents(id: number | undefined): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(header);
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`, {headers: header});
  }
  getCourses(): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/courses`,{headers: header});
  }
  getStudentPage(studentQueryModel : StudentQueryModel): Observable<any> {
    const token = sessionStorage.getItem('accessToken');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("studentQueryModel");
    console.log(studentQueryModel);
    return this.http.post(`${this.apiUrl}/filter`,studentQueryModel,{ headers: header });
  }
}
