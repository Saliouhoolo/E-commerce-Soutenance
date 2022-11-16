import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm!: FormGroup;
  isSubmitted = false;
  message : string =""
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  get formControls() {
    return this.loginForm.controls;
  }

  createForm() {
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern(emailPattern)]],
      password: ['', [Validators.required,Validators.min(4)]]
    });
  }

  signIn() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

this.authService.signIn(this.loginForm.value)
      .subscribe(
        (res:any)=>{
          this.authService.setItem('token',res.token);
          this.authService.setItem('user', JSON.stringify(res.user));
          let currentUser = this.authService.getCurrentUser();
          if( currentUser.role === "[ROLE_ACHETEUR]" || currentUser.role === "[ROLE_VENDEUR]"  || currentUser.role === "[ROLE_EXPERT]" ){
            this.router.navigate(['/public/home'])
          }
else {
            this.router.navigate(['admin'])

          }
        },
        err => {
          console.log(err)
          this.message =  "l'adresse e-mail ou le mot de passe est incorrect"
        })
}
}

