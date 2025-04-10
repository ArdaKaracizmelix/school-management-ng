import { NgModule } from "@angular/core";
import { StudentCoursesComponent } from "./components/student-courses.component";
import { LayoutComponent } from "../../layout/components/layout.component";
import { StudentCoursesRoutesModule } from "./student-courses-routes.module";
import { TableModule } from 'primeng/table';
import {ExamResultsModule} from '../../exam-results/exam-results-module';
import {NgIf} from '@angular/common';
import {Dialog} from "primeng/dialog";
import {Tab} from 'primeng/tabs';
import {Button, ButtonLabel} from 'primeng/button';
@NgModule({
    declarations:[StudentCoursesComponent],
  imports: [
    LayoutComponent,
    StudentCoursesRoutesModule,
    TableModule,
    ExamResultsModule,
    NgIf,
    Dialog,
    Tab,
    ButtonLabel,
    Button

  ],
    exports:[StudentCoursesComponent]
})
export class StudentCoursesModule {}
