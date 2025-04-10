import {Component, OnInit} from '@angular/core';
import {StudentModel} from '../../models/student-model';
import {Router} from '@angular/router';
import {StudentsService} from '../../services/students/students.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TableLazyLoadEvent} from 'primeng/table';
import {StudentQueryModel} from '../../models/student-query-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
  standalone:false

})
export class StudentListComponent implements OnInit {
  selectedStudent: StudentModel = new StudentModel();
  students!: StudentModel[];
  studentQueryModel = new StudentQueryModel();
  constructor(private router: Router, private studentService:StudentsService,
              private messageService:MessageService,private confirmationService: ConfirmationService) {
  }
  ngOnInit(): void {
     }
  totalRecords : number = 0;
  loading: boolean = false;

  loadStudentLazy($event: TableLazyLoadEvent): void {

    this.loading = true;
    const page = $event.first ? $event.first / $event.rows! : 0;
    const size = $event.rows || 5;
    const sortField = $event.sortField || 'id';
    const sortOrder = $event.sortOrder || 1;

    let filters = $event.filters;
    console.log("filters");
    console.log(filters);
    if (filters) {
      if (Array.isArray(filters['id'])) {
        this.studentQueryModel.id = filters['id'][0]?.value ;
      } else if (filters['id'] && 'value' in filters['id']) {
        this.studentQueryModel.id = filters['id'].value;
      }
      if (Array.isArray(filters['firstName'])) {
        this.studentQueryModel.firstName = filters['firstName'][0]?.value ;
      } else if (filters['firstName'] && 'value' in filters['firstName']) {
        this.studentQueryModel.firstName = filters['firstName'].value;
      }
      if (Array.isArray(filters['lastName'])) {
        this.studentQueryModel.lastName = filters['lastName'][0]?.value;
      } else if (filters['lastName'] && 'value' in filters['lastName']) {
        this.studentQueryModel.lastName = filters['lastName'].value;
      }
      this.studentQueryModel.sortField=sortField
      this.studentQueryModel.sortDirection=sortOrder
      this.studentQueryModel.pageSize = size
      this.studentQueryModel.pageNo = page
    }
    this.studentService.getStudentPage(this.studentQueryModel).subscribe(
      data => {
        this.students = data.content;
        this.totalRecords = data.totalElements;
        this.loading = false;
      },
      error => {
        alert("Student bilgileri getirilemedi. " + error.message);
        this.loading = false;
      }
    );
  }
  onSelectRow(student: StudentModel) {
    this.selectedStudent = student;

  }

  onAddStudent() {
    this.router.navigate(['student-add']);
  }

  onDeleteStudent() {
    if(!this.selectedStudent){
      this.messageService.add({severity: 'danger', summary: 'No students were selected'});
      return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this student?',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label:"Delete",
        severity: "danger",
      },
      accept :() => {
        this.studentService.deleteStudents(this.selectedStudent.id).subscribe({
            next: () => {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student deleted successfully' });
              this.students = this.students.filter(student => student.id !== this.selectedStudent.id);
            },
            error: error => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Student could not be deleted' });
            }
          }
        )
      },
    })

  }
}
