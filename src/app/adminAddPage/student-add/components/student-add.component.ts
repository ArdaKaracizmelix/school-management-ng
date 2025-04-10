import {Component, OnInit} from '@angular/core';
import {StudentModel} from '../../../models/student-model';
import {DepartmentModel} from '../../../models/department-model';
import {Router} from '@angular/router';
import {DeanService} from '../../../services/dean/dean.service';
import {DepartmentService} from '../../../services/department/department.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.scss',
  standalone: false
})
export class StudentAddComponent implements OnInit {
  student:StudentModel = new StudentModel();
  departments!:DepartmentModel[]
  selectedDepartment:any;
  selectedGender:any;

  genders: any[] | undefined;
  constructor(public router: Router,private deanService:DeanService,private departmentService:DepartmentService,private messageService:MessageService) {
    this.genders = ['MALE', 'FEMALE'];
  }




  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      data=> {
        this.departments=data;
      },
      error => {
        alert("Departman bilgileri getirilemedi.")
      }
    );
  }
  addStudent() {
    if(this.selectedDepartment) {
      this.student.deptID=this.selectedDepartment.id
    }
    if(this.selectedGender) {
      this.student.gender=this.selectedGender
    }

    this.deanService.addStudent(this.student).subscribe({
      next: data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student added successfully' });
        setTimeout(() => {
          this.router.navigate(['/student-list']);
        }, 600);
      },
      error: error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Student could not be added' });
      }


    })


  }







}
