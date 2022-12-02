import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = "http://localhost:8081/api/"
  constructor(private http:HttpClient,private router: Router,
    ) { }
  public liste() {
      return   this.http.get<any>(this.apiUrl + 'users').pipe(catchError(this.errorHandler))
    }
    public add(values:any) {
      return   this.http.post<any>(this.apiUrl + 'users',values).pipe(catchError(this.errorHandler))
    }
    public edit(values:any) {
      return   this.http.put<any>(this.apiUrl + 'users/'+values.id,values).pipe(catchError(this.errorHandler))
    }
    public delete(id:any) {
      return   this.http.delete<any>(this.apiUrl + 'users/'+id).pipe(catchError(this.errorHandler))
    }


    errorHandler(error: HttpErrorResponse) {
      return throwError(error);
    }
}
