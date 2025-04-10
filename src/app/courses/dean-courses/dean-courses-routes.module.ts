import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeanCoursesComponent} from './components/dean-courses.component';

const routes: Routes = [{path: '', component: DeanCoursesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeanCoursesRoutesModule {}
