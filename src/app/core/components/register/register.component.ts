import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  message : string =""
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  get formControls() {
    return this.registerForm.controls;
  }

  createForm() {
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.registerForm = this.formBuilder.group({
      prenom: ['',Validators.required],
      nom: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern(emailPattern)]],
      password: ['', [Validators.required,Validators.min(4)]],
      confirm_password: ['', [Validators.required]],
      role: ['ROLE_ACHETEUR',Validators.required]

    },{
      validator: this.ConfirmedValidator('password', 'confirm_password')
    });
  }

  signUp() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      return;
    }
    this.authService.signUp(this.registerForm.value)
      .subscribe(
        (res:any)=>{
          this.registerForm.value.reset

          this.router.navigate(['/login'])
        },
        err => {
          console.log(err)
          this.message =  err.error.message
        })
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
