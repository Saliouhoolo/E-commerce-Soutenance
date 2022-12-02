import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl = "http://localhost:8081/api/"
  constructor(private http:HttpClient,private router: Router,
    ) { }
  public liste() {
      return   this.http.get<any>(this.apiUrl + 'produit').pipe(catchError(this.errorHandler))
    }
    public add(value:any,image:string) {
      const formData: FormData = new FormData();
      formData.append('libelle',  value.libelle);
      formData.append('description', value.description);
      formData.append('qte', value.qte);
      formData.append('prix', value.prix);
      formData.append('category', value.category);
      formData.append('file', image);
      return   this.http.post<any>(this.apiUrl + 'produit',formData).pipe(catchError(this.errorHandler))
    }
    public edit(values:any) {
      return   this.http.put<any>(this.apiUrl + 'produit/'+values.id,values).pipe(catchError(this.errorHandler))
    }
    public delete(id:any) {
      return   this.http.delete<any>(this.apiUrl + 'produit/'+id).pipe(catchError(this.errorHandler))
    }
    public get(id:any){
      return  this.http.get<any>(this.apiUrl + 'produit/'+id).pipe(catchError(this.errorHandler))

    }

    errorHandler(error: HttpErrorResponse) {
      return throwError(error);
    }
}
