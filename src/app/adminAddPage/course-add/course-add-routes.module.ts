import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseAddComponent} from './components/course-add.component';


const routes: Routes = [{path: '', component: CourseAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAddRoutesModule {}
