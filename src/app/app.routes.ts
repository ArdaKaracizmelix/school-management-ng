import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home-module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },

  {
    path:'profile',
    loadChildren:() => import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },

  {
    path:'student-courses',
    loadChildren:() => import('./courses/student-courses/student-courses-module').then((m) => m.StudentCoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path:'instructor-courses',
    loadChildren:() => import('./courses/instructor-courses/instructor-courses-module').then((m) => m.InstructorCoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path:'student-add',
    loadChildren:() => import('./adminAddPage/student-add/student-add-module').then((m) => m.StudentAddModule),
    canActivate: [AuthGuard],
  },
  {
    path:'instructor-add',
    loadChildren:() => import('./adminAddPage/instructor-add/instructor-add-module').then((m) => m.InstructorAddModule),
    canActivate: [AuthGuard],
  },
  {
    path:'exam-add',
    loadChildren:() => import('./adminAddPage/exam-add/exam-add-module').then((m) => m.ExamAddModule),
    canActivate: [AuthGuard],
  },
  {
    path:'student-enroll',
    loadChildren:() => import('./student-enroll/student-enroll.module').then((m) => m.StudentEnrollModule),
    canActivate: [AuthGuard],
  },
  {
    path:'student-list',
    loadChildren:() => import('./studentListPage/student-list-module').then((m) => m.StudentListModule),
    canActivate: [AuthGuard],
  },
  {
    path:'instructor-list',
    loadChildren:() => import('./instructorListPage/instructor-list-module').then((m) => m.InstructorListModule),
  },
  {
    path:'exam-results',
    loadChildren:() => import('./exam-results/exam-results-module').then((m) => m.ExamResultsModule),
  },
  {
    path:'dean-courses',
    loadChildren:() => import('./courses/dean-courses/dean-courses-module').then((m) => m.DeanCoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path:'course-add',
    loadChildren:() => import('./adminAddPage/course-add/course-add-module').then((m) => m.CourseAddModule),
    canActivate: [AuthGuard],
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
