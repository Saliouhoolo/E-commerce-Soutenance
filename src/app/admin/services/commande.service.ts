import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {


  apiUrl = "http://localhost:8081/api/"
  constructor(private http:HttpClient,private router: Router,
    ) { }
  public liste() {
      return   this.http.get<any>(this.apiUrl + 'commande').pipe(catchError(this.errorHandler))
    }
    public add(values:any) {
      return   this.http.post<any>(this.apiUrl + 'commande',values).pipe(catchError(this.errorHandler))
    }
  public changeStatus(id:number) {
    return   this.http.get<any>(this.apiUrl + 'commande/change/'+id).pipe(catchError(this.errorHandler))
  }
    errorHandler(error: HttpErrorResponse) {
      return throwError(error);
    }
}
