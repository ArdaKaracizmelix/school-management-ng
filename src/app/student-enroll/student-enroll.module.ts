import {NgModule} from '@angular/core';
import {StudentEnrollComponent} from './components/student-enroll.component';
import {StudentEnrollRoutesModule} from './student-enroll-routes.module';
import {LayoutComponent} from '../layout/components/layout.component';
import {Button} from "primeng/button";
import {Card} from "primeng/card";
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Select} from "primeng/select";
import {Toast} from "primeng/toast";
import {MessageService} from 'primeng/api';

;

@NgModule({
  declarations: [StudentEnrollComponent],
    imports: [
        StudentEnrollRoutesModule,
        LayoutComponent,
        Button,
        Card,
        FloatLabel,
        FormsModule,
        InputText,
        Select,
        Toast,


    ],
  providers:[MessageService],
  exports: [StudentEnrollComponent]
})
export class StudentEnrollModule {
}
