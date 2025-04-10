import { NgModule } from "@angular/core";

import { LayoutComponent } from "../../layout/components/layout.component";

import { TableModule } from 'primeng/table';
import {ExamResultsModule} from '../../exam-results/exam-results-module';
import {NgIf} from '@angular/common';
import {DeanCoursesComponent} from './components/dean-courses.component';
import {DeanCoursesRoutesModule} from './dean-courses-routes.module';
import {Button} from 'primeng/button';
@NgModule({
  declarations:[DeanCoursesComponent],
  imports: [
    LayoutComponent,
    DeanCoursesRoutesModule,
    TableModule,
    ExamResultsModule,
    NgIf,
    Button

  ],
  exports:[DeanCoursesComponent]
})
export class DeanCoursesModule {}
