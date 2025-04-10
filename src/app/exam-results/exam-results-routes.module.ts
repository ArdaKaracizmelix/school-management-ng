import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamResultsComponent} from './components/exam-results.component';

const routes: Routes = [{path: '', component: ExamResultsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamResultsRoutesModule {}
