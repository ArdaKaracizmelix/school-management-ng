import { NgModule } from "@angular/core";

import { LayoutComponent } from "../layout/components/layout.component";
import {ExamResultsComponent} from './components/exam-results.component';
import {ExamResultsRoutesModule} from './exam-results-routes.module';
import {Tab} from 'primeng/tabs';
import {TableModule} from 'primeng/table';





@NgModule({
  declarations:[ExamResultsComponent],
  imports: [
    ExamResultsRoutesModule,
    LayoutComponent,
    Tab,
    TableModule,


  ],
  exports:[ExamResultsComponent]
})
export class ExamResultsModule {




}
