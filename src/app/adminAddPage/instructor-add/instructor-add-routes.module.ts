import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstructorAddComponent} from './components/instructor-add.component';

const routes: Routes = [{path: '', component: InstructorAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorAddRoutesModule {}
