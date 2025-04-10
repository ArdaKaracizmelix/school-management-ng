import { Component } from '@angular/core';
import {InstructorModel} from '../../../models/instructor-model-';
import {Router} from '@angular/router';
import {DeanService} from '../../../services/dean/dean.service';
import {DepartmentService} from '../../../services/department/department.service';
import {OfficeService} from '../../../services/office/office.service';
import {DepartmentModel} from '../../../models/department-model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-instructor-add',
  standalone:false,
  templateUrl: './instructor-add.component.html',
  styleUrl: './instructor-add.component.scss'
})
export class InstructorAddComponent {
  instructor:InstructorModel = new InstructorModel();
  departments!:DepartmentModel[]
  offices!:any[]
  selectedInsDepartment:any;
  selectedOffice:any;
  selectedInsGender:any;
  genders: any[] | undefined;
  constructor(public router: Router,private deanService:DeanService,private departmentService:DepartmentService,
              private officeService: OfficeService,private messageService: MessageService) {
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
    this.officeService.getOffices().subscribe(
      data=> {
        this.offices=data

      },
      error => {
        alert("Ofis bilgileri getirilemedi.")
      }
    )

  }
  addInstructor() {
    if(this.selectedInsDepartment) {
      this.instructor.deptID=this.selectedInsDepartment.id
    }
    if(this.selectedOffice) {
      this.instructor.officeID=this.selectedOffice.id
    }
    if(this.selectedInsGender) {
      this.instructor.gender=this.selectedInsGender
    }
    this.deanService.addInstructor(this.instructor).subscribe({
      next: data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Instructor added successfully' });
        setTimeout(() => {
          this.router.navigate(['/instructor-list']);
        }, 600);
      },
      error: error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Instructor could not be added' });
      }


    })


  }
}
