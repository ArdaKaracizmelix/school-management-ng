import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Drawer} from "primeng/drawer";
import {Toolbar} from "primeng/toolbar";
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    Button,
    Drawer,
    Toolbar,
    NgIf
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  visibleSidebar=false;
  role: string | null;

  constructor(public router : Router) {
    this.role = sessionStorage.getItem("Role");
  }


  onLogout(){

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    this.router.navigate(['login']);
    sessionStorage.removeItem('Role');

  }
  onProfile() {
    this.router.navigate(['profile']);
  }
  onHome(){
    this.router.navigate(['home'])
  }
  onStudentCourse(){
    this.router.navigate(['student-courses'])
  }
  onInstructorCourse(){
    this.router.navigate(['instructor-courses'])
  }
  onStudentList(){
    this.router.navigate(['student-list'])
  }

  onInstructorList() {
    this.router.navigate(['instructor-list'])
  }
  onDeanCourse(){
    this.router.navigate(['dean-courses'])
  }
  onStudentEnroll(){
    this.router.navigate(['student-enroll'])
  }
}
