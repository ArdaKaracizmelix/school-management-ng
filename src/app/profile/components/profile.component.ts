import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {StudentModel} from '../../models/student-model';
import {InstructorModel} from '../../models/instructor-model-';
import {DeanModel} from '../../models/dean-model';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone:false,
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
user! : StudentModel | InstructorModel | DeanModel;
role?:String
token:any
officeName!:String
  constructor(public router: Router,public http: HttpClient,private AuthService : AuthenticationService) {
  }
  ngOnInit(): void {
    this.AuthService.getProfile().subscribe(
      data=> {
        this.user=data;
        this.token = sessionStorage.getItem('accessToken')
        const helper = new JwtHelperService();
        const decoded = helper.decodeToken(this.token)
        this.role=decoded.Role
        this.officeName = data.officeName


        console.log(this.user);
      },

      error => {
        alert("Profil bilgileri getirilemedi.")
      }
    )
  }


}
