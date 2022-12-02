import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:8081/api/"
  constructor(private http:HttpClient,private router: Router,
    ) { }
  public signIn(value:any) {
      return   this.http.post<any>(this.apiUrl + 'auth/login', value).pipe(catchError(this.errorHandler))
    }
   public signUp(value:any) {
      return   this.http.post<any>(this.apiUrl + 'auth/register', value).pipe(catchError(this.errorHandler))
    }
  signOut() {
      return new Promise((resolve, reject) => {
          this.removeItem("token");
          this.removeItem("user");
          this.router.navigate(['/']);
        }
      )
    }
    loggedIn() {
      return !!this.getToken()
    }
    public isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }

  errorHandler(error: HttpErrorResponse) {
      return throwError(error);
    }
    public getCurrentUser() {
      // @ts-ignore
      return JSON.parse(localStorage.getItem('user'))
    }
    getToken() {
      return localStorage.getItem('token');
    }
  public removeItem(key: string) {
      localStorage.removeItem(key);
      return this;
    }
    public setItem(key: string, value: string) {
      localStorage.setItem(key, value);
      return this;
    }

}
