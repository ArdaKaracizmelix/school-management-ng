import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentEnrollComponent} from './components/student-enroll.component';


const routes: Routes = [{path: '', component: StudentEnrollComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentEnrollRoutesModule {}
