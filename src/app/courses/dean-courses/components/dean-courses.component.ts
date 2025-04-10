import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../../models/course-model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DeanService} from '../../../services/dean/dean.service';

@Component({
  selector: 'app-dean-courses',
  templateUrl: './dean-courses.component.html',
  styleUrl: './dean-courses.component.scss',
  standalone: false
})
export class DeanCoursesComponent implements OnInit{
  courses!: CourseModel[]


  constructor(public router: Router,public http: HttpClient,private deanService : DeanService) {
  }


  ngOnInit(): void {
    this.deanService.getCourses().subscribe(
      course=> {
        this.courses=course

      },
      error => {
        alert("Ders bilgileri getirilemedi.")
      }
    );
  }
  onAddCourse() {
    this.router.navigate(['course-add']);
  }
}
