import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {CourseModel} from '../../../models/course-model';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InstructorService} from '../../../services/instructors/instructor.service';
import {GradeComponent} from '../../../grade/component/grade.component';
import {ExamAddComponent} from '../../../adminAddPage/exam-add/components/exam-add.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrl: './instructor-courses.component.scss',
  standalone: false
})
export class InstructorCoursesComponent implements OnInit {
  courses!: CourseModel[]
  examResultsUrl = 'http://localhost:8080/api/exam-results';
  @Output() selectedCourse: CourseModel = new CourseModel();
  @ViewChild(GradeComponent) gradeComponent!: GradeComponent;
  @ViewChild(ExamAddComponent) examAddComponent!: ExamAddComponent;
  constructor(public router: Router,public http: HttpClient,private instructorService : InstructorService,private messageService : MessageService) {
  }
  ngOnInit(): void {
    this.instructorService.getCourses().subscribe(
      course=> {
        this.courses=course
     },
      error => {
        alert("Ders bilgileri getirilemedi.")
      }
    );
  }
  onSelectRow(course: CourseModel) {
    this.gradeComponent.getStudents(this.selectedCourse.id);
    this.selectedCourse = course;
  }
  onAddExam() {
    this.router.navigate(['exam-add']);
  }

  saveGrades(id:number,score:number) {
    const token = sessionStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.post(`${this.examResultsUrl}/courses/exam-result/update`, {id,score},{ headers: headers }).subscribe({
      next: result => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Grade saved successfully' });
      },
      error: error => {

      }


    });
  }
}
