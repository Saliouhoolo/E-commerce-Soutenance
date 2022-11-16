import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

 
  apiUrl = "localhost:8080/"
  constructor(private http:HttpClient,private router: Router,
    ) { }
  public liste() {
      return   this.http.get<any>(this.apiUrl + 'commande').pipe(catchError(this.errorHandler))
    }
    public add(values:any) {
      return   this.http.post<any>(this.apiUrl + 'commande',values).pipe(catchError(this.errorHandler))
    }
    public edit(id:any,values:any) {
      return   this.http.put<any>(this.apiUrl + 'commande/'+id,values).pipe(catchError(this.errorHandler))
    }
    public delete(id:any) {
      return   this.http.delete<any>(this.apiUrl + 'commande/'+id).pipe(catchError(this.errorHandler))
    }


    errorHandler(error: HttpErrorResponse) {
      return throwError(error);
    }
}
