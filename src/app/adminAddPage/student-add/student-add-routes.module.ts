import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentAddComponent} from './components/student-add.component';

const routes: Routes = [{path: '', component: StudentAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAddRoutesModule {}
