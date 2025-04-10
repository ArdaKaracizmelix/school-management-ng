import {Component, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentModel} from '../../models/student-model';
import {ExamResultModel} from '../../models/exam-result-model';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.scss',
  standalone:false
})
export class GradeComponent {
  students: StudentModel[] = [];
  apiUrl = 'http://localhost:8080/api/instructors';
  examResultsUrl = 'http://localhost:8080/api/exam-results';
  examResults: ExamResultModel[] = [];
  gradeDialogVisible:boolean = false;

  @Input()
  selectedCourseId!: number;
  constructor(private http: HttpClient) {}

  getStudents(courseID: number ): void {
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`${this.apiUrl}/courses/${courseID}/students`, {headers: headers}).subscribe(
      {
        next: results => {
          this.students = results;
        }
      }
    );
  }
  getExamResults(courseID: number,studentID:number): void {
    this.gradeDialogVisible = true;
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any[]>(`${this.examResultsUrl}/courses/${courseID}/students/${studentID}`, {headers: headers}).subscribe(
      {
        next: results => {
          this.examResults=results;
          console.log(this.examResults);
        }
      }
    );

  }

}
