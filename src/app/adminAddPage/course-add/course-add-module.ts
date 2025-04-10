import { NgModule, OnInit } from "@angular/core";
import { LayoutComponent } from "../../layout/components/layout.component";
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { FloatLabelModule } from 'primeng/floatlabel';
import { Button } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { SelectModule } from 'primeng/select';
import {DropdownModule} from 'primeng/dropdown';
import {IftaLabel} from "primeng/iftalabel";import { DatePickerModule } from 'primeng/datepicker';
import {CourseAddComponent} from './components/course-add.component';
import {CourseAddRoutesModule} from './course-add-routes.module';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
@NgModule({
  declarations:[CourseAddComponent],
  imports: [
    CourseAddRoutesModule,
    LayoutComponent,
    InputTextModule,
    CardModule,
    FloatLabelModule,
    Button,
    FormsModule,
    SelectModule,
    DropdownModule,
    IftaLabel,
    DatePickerModule,
    Toast
  ],
  providers:[MessageService],
  exports:[CourseAddComponent]
})
export class CourseAddModule {




}
