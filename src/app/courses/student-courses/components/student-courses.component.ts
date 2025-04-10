import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from '../../../models/course-model';
import {ExamResultsComponent} from '../../../exam-results/components/exam-results.component';
import {StudentsService} from '../../../services/students/students.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.scss',
  standalone:false
})
export class StudentCoursesComponent implements OnInit{
  courses!: CourseModel[]
  selectedCourse: CourseModel = new CourseModel();
  @ViewChild(ExamResultsComponent) examResultsComponent!: ExamResultsComponent;


  constructor(public router: Router,public http: HttpClient,private studentService : StudentsService) {
   }
  ngOnInit(): void {
    this.studentService.getCourses().subscribe(
      course=> {
        this.courses=course

      },
      error => {
        alert("Ders bilgileri getirilemedi.")
      }
    );
  }
  onSelectRow(course: CourseModel) {
     this.selectedCourse = course;
     this.examResultsComponent.getExamResults(this.selectedCourse.id);
  }
}
