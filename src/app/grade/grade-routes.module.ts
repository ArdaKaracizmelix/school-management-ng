import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GradeComponent} from './component/grade.component';

const routes: Routes = [{path: '', component: GradeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutesModule{}
