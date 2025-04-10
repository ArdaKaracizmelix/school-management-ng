import {Component, OnInit} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {RouterOutlet} from '@angular/router';
import {HomeModule} from './home/home-module';
import {AuthInterceptor} from './helper/http.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { StudentCoursesModule } from './courses/student-courses/student-courses-module';
import {ExamResultsModule} from './exam-results/exam-results-module';
import {DeanCoursesModule} from './courses/dean-courses/dean-courses-module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HomeModule,
    ProfileModule,
    StudentCoursesModule,
    ExamResultsModule,
    DeanCoursesModule,
  ],
  styleUrl: './app.component.scss',
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi: true}
  ]
})
export class AppComponent implements OnInit {
  title = 'school-management-ng';

  constructor(private primeng: PrimeNG) {
  }
  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
