import { NgModule } from "@angular/core";

import { LayoutComponent } from "../layout/components/layout.component";
import {InstructorListComponent} from './components/instructor-list.component';
import {InstructorListRoutesModule} from './instructor-list-routes-module';
import {Button} from 'primeng/button';
import {ConfirmationService, MessageService, PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Toast} from 'primeng/toast';
import {ConfirmDialog} from 'primeng/confirmdialog';



@NgModule({
  declarations:[InstructorListComponent],
  imports: [
    InstructorListRoutesModule,
    LayoutComponent,
    Button,
    PrimeTemplate,
    TableModule,
    Toast,
    ConfirmDialog,
  ],
  providers: [MessageService,ConfirmationService],
  exports:[InstructorListComponent]


})
export class InstructorListModule {




}
