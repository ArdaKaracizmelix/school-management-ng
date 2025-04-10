import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = 'http://localhost:8080/api/exams';
  constructor(private http: HttpClient) { }

  addExam(examData:any) {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    console.log(header)

    return this.http.post(`${this.apiUrl}/add-exam`,examData,{ headers: header });
  }


}
