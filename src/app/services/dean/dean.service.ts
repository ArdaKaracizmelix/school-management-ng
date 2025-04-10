import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeanService {
  private apiUrl = 'http://localhost:8080/api/deans';
 constructor(private http: HttpClient) { }

 addStudent(studentData:any) {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`,
      );
     console.log(header)


    return this.http.post(`${this.apiUrl}/add-students`,studentData,{ headers: header });
 }
 addInstructor(instructorData:any) {
   const token = sessionStorage.getItem('accessToken')
   const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
   console.log(header)

   return this.http.post(`${this.apiUrl}/add-instructors`,instructorData,{ headers: header });
 }

  getCourses(): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/courses`,{headers: header});
  }
  addCourse(courseData:any) {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/add-course`,courseData,{ headers: header });
  }
}
