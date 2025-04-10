import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService, private messageService: MessageService) {
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (result) => {

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successful login' });


        setTimeout(() => {
          const helper = new JwtHelperService();
          const decoded = helper.decodeToken(<string>sessionStorage.getItem('accessToken'));

          sessionStorage.setItem('Role', decoded.Role);
          this.router.navigate(['/home']);
        }, 600);

      },
      error: (error) => {

        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid username or password' });
      }
    });
  }

  onEnter() {
    this.onLogin();
  }
}
