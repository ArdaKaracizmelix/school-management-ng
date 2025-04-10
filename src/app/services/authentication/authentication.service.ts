import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api';
  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) {
    this.loadTokens();
  }
  loadTokens() {
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    this.accessTokenSubject.next(accessToken);
    this.refreshTokenSubject.next(refreshToken);
  }
  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, {username, password}).pipe(
      tap(response => {
        this.saveTokens(response.accessToken,response.refreshToken);
      })
    )
  }
  refreshToken(): Observable<any> {
    const refreshToken = this.refreshTokenSubject.getValue();
    return this.http.post<any>(`${this.apiUrl}/refresh-token`, {refreshToken}).pipe(
      tap(response => {
        this.saveTokens(response.accessToken,response.refreshToken);
      })
    )
  }
  getAccessToken(): any {
    return this.accessTokenSubject.value;
  }
  saveTokens(accessToken: any, refreshToken: any) {
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('refreshToken', refreshToken);
    this.refreshTokenSubject.next(null);
    this.accessTokenSubject.next(null);
  }
  isLoggedIn(): boolean {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
      return false;
    }
    const tokenExpDate = this.getTokenExpirationDate(accessToken);

    if((!tokenExpDate)  || tokenExpDate < new Date()){
      this.logout();

      return false;
    }

    return true;
  }
  logout(): void {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    window.location.href="/login";

  }
  getTokenExpirationDate(accessToken: string): any {
      try{
        const decoded = jwtDecode(accessToken);
        if(!decoded.exp){
          return null;
        }
        return new Date(decoded.exp * 1000);
      }
      catch(error){
        console.error(error);
        return null;

      }
  }
  getProfile(): Observable<any> {
    const token = sessionStorage.getItem('accessToken')
    const header = new HttpHeaders().set('Authorization',`Bearer ${token}`,
      );
        if(!header)
          console.log("header boş")
    return this.http.get(`${this.apiUrl}/users/profile`,{ headers: header });
  }

  }

