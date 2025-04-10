import {NgModule} from "@angular/core";

import {LayoutComponent} from "../layout/components/layout.component";
import {StudentListComponent} from './components/student-list.component';
import {StudentListRoutesModule} from './student-list-routes.module';
import {TableModule} from 'primeng/table';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {Button} from 'primeng/button';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
import {ConfirmDialog} from 'primeng/confirmdialog';

@NgModule({
  declarations:[StudentListComponent],
  imports: [
    StudentListRoutesModule,
    LayoutComponent,
    TableModule,
    IconField,
    InputIcon,
    Button,
    Toast,
    ConfirmDialog,

  ],
  providers:[MessageService,ConfirmationService],
  exports:[StudentListComponent]
})
export class StudentListModule {




}
