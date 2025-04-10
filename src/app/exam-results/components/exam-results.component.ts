import {Component, Input, numberAttribute, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ExamResultModel} from '../../models/exam-result-model';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrl: './exam-results.component.scss',
  standalone: false
})
export class ExamResultsComponent {

  examResults: ExamResultModel[]=[];
  apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}
  getExamResults(courseID: number): void {
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);

     this.http.get<any[]>(`${this.apiUrl}/course/${courseID}/exam-results`,{headers: headers}).subscribe(
       {
         next: results => {
           this.examResults = results;

                }
       }
     );
  }
}
