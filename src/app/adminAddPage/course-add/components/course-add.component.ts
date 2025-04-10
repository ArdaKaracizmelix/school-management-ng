import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../../models/course-model';
import {DepartmentModel} from '../../../models/department-model';
import {ClassroomModel} from '../../../models/classroom-model';
import {Router} from '@angular/router';
import {DeanService} from '../../../services/dean/dean.service';
import {DepartmentService} from '../../../services/department/department.service';
import {ClassroomService} from '../../../services/classroom/classroom.service';
import {InstructorService} from '../../../services/instructors/instructor.service';
import {InstructorModel} from '../../../models/instructor-model-';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.scss',
  standalone:false
})
export class CourseAddComponent implements OnInit {
  course: CourseModel = new CourseModel();
  departments!: DepartmentModel[]
  selectedDepartment!: DepartmentModel;
  classrooms!: ClassroomModel[]
  selectedClassroom!: ClassroomModel
  instructors!: InstructorModel[]
  selectedInstructor!: InstructorModel

  constructor(public router: Router, private deanService: DeanService, private departmentService: DepartmentService,
              private classroomService: ClassroomService,private instructorService: InstructorService,private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      data => {
        this.departments = data;
      },
      error => {
        alert("Departman bilgileri getirilemedi.")
      }
    );
    this.classroomService.getClassrooms().subscribe(
      data => {
        this.classrooms = data

      },
      error => {
        alert("Sınıf bilgileri getirilemedi.")
      }
    )
    this.instructorService.getInstructors().subscribe(
      data => {
        this.instructors = data

      },
      error => {
        alert("Öğretmen bilgileri getirilemedi.")
      }
    )
  }
  addCourse() {
    if(this.selectedDepartment) {
      this.course.deptID=this.selectedDepartment.id
    }
    if(this.selectedClassroom) {
      this.course.classroomID=this.selectedClassroom.id
    }
    if(this.selectedInstructor) {
      this.course.instructorID=this.selectedInstructor.id
    }
    this.deanService.addCourse(this.course).subscribe({
      next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course added successfully' });
        setTimeout(() => {
          this.router.navigate(['/dean-courses']);
        }, 600);
      }


    })


  }
}
