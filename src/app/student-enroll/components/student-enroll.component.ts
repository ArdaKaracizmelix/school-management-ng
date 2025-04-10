import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../models/course-model';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses/courses.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrl: './student-enroll.component.scss',
  standalone:false
})
export class StudentEnrollComponent implements OnInit {
  courses!: CourseModel[];
  selectedCourse!: CourseModel;
  courseID!:number

  constructor(public router: Router,private courseService: CoursesService,private http: HttpClient, private messageService: MessageService) {

  }

    ngOnInit(): void {
      this.courseService.getCourses().subscribe(
        data => {
          this.courses= data;
          console.log(this.courses);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ders bilgileri getirilemedi' });
        }
      );
    }
    enroll() {

       if(this.selectedCourse) {
       this.courseID=this.selectedCourse.id
     }
       const token = sessionStorage.getItem('accessToken')
       const header = new HttpHeaders().set('Authorization',`Bearer ${token}`);
       this.http.post('http://localhost:8080/api/enrollments/enroll',this.courseID,{headers: header}).subscribe({
        next: (result) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successful enroll' });
        },
         error: error => {
           this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Already enrolled to this course' });
         }

         });

     }



}
