import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InstructorService} from '../../services/instructors/instructor.service';
import {InstructorModel} from '../../models/instructor-model-';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TableLazyLoadEvent} from 'primeng/table';
import {InstructorQueryModel} from '../../models/instructor-query-model';



@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.scss',
  standalone: false
})
export class InstructorListComponent implements OnInit {
  selectedInstructor: InstructorModel = new InstructorModel();
  instructors!: InstructorModel[];
  instructorQueryModel = new InstructorQueryModel();

  constructor(private router: Router, private instructorService:InstructorService,
              private messageService:MessageService,private confirmationService: ConfirmationService) {
  }
  totalRecords : number = 0;
  loading: boolean = false;
  ngOnInit(): void {

  }

  loadInstructorLazy($event: TableLazyLoadEvent): void {

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
          this.instructorQueryModel.id = filters['id'][0]?.value   || '';
      } else if (filters['id'] && 'value' in filters['id']) {
        this.instructorQueryModel.id = filters['id'].value || '';
      }
      if (Array.isArray(filters['firstName'])) {
        this.instructorQueryModel.firstName = filters['firstName'][0]?.value || '';
      } else if (filters['firstName'] && 'value' in filters['firstName']) {
        this.instructorQueryModel.firstName = filters['firstName'].value || '';
      }
      if (Array.isArray(filters['lastName'])) {
        this.instructorQueryModel.lastName = filters['lastName'][0]?.value || '';
      } else if (filters['lastName'] && 'value' in filters['lastName']) {
        this.instructorQueryModel.lastName = filters['lastName'].value || '';
      }
      this.instructorQueryModel.sortField=sortField
      this.instructorQueryModel.sortDirection=sortOrder
      this.instructorQueryModel.pageSize = size
      this.instructorQueryModel.pageNo = page
    }
   this.instructorService.getInstructorPage(this.instructorQueryModel).subscribe(
    data => {
        this.instructors = data.content;
        this.totalRecords = data.totalElements;
        this.loading = false;
      },
      error => {
        alert("Instructor bilgileri getirilemedi. " + error.message);
        this.loading = false;
      }
    );
  }

  onSelectRow(instructor: InstructorModel) {
    this.selectedInstructor = instructor;

  }

  onAddInstructor() {
    this.router.navigate(['instructor-add']);
  }

  onDeleteInstructor() {
    if(!this.selectedInstructor) {
      return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this instructor?',
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
      accept: () => {
        this.instructorService.deleteInstructors(this.selectedInstructor.id).subscribe({
          next: () => {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Instructor deleted successfully' });
              this.instructors = this.instructors.filter(instructor => instructor.id !== this.selectedInstructor.id);
            },
            error: error => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Instructor could not be deleted' });
            }
          }
        )
      }
    })

  }
}

