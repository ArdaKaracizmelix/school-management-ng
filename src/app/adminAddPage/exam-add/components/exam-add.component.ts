import {Component, Input, OnInit} from '@angular/core';
import {ExamModel} from '../../../models/exam-model';
import {CourseModel} from '../../../models/course-model';
import {Router} from '@angular/router';
import {CoursesService} from '../../../services/courses/courses.service';
import {ExamService} from '../../../services/exam/exam.service';
import {MessageService} from 'primeng/api';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrl: './exam-add.component.scss',
  standalone:false
})
export class ExamAddComponent implements OnInit{
  exam: ExamModel = new ExamModel();
  courses!: CourseModel[]
  selectedCourse!: CourseModel;
  selectedExamType:any;
  examTypes: any[] | undefined;
  @Input()
  selectedCourseId!: number;
  constructor(public router: Router,private courseService:CoursesService,private examService:ExamService,private messageService:MessageService) {
    this.examTypes = ['MIDTERM', 'QUIZ' , 'FINAL'];
  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      data=> {
        this.courses=data;
      },
      error => {
        alert("Course bilgileri getirilemedi.")
      }
    );


  }
  addExam() {
    if(this.selectedCourse) {
      this.exam.courseId=this.selectedCourse.id
    }
    if(this.selectedExamType) {
      this.exam.examType=this.selectedExamType
    }

    this.examService.addExam(this.exam).subscribe({
      next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exam added successfully' });

        setTimeout(() => {
          this.router.navigate(['/instructor-courses']);
        }, 600);
      }


    })


  }
}
