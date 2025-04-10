import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamAddComponent} from './components/exam-add.component';


const routes: Routes = [{path: '', component: ExamAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamAddRoutesModule {}
