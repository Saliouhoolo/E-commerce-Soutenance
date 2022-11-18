import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  editMode =false
  users:any[] =[];
  isSubmitted = false;
  message : string =""
  isMessage = false
  constructor(
    public userService: UsersService,
    private fb: FormBuilder,

  ) {
    this.createForm()
  }
  get formControls() {
    return this.userForm.controls;
  }
  ngOnInit(): void {
    this.usersList()
  }
  usersList(){
    this.userService.liste().subscribe((response: any) => {
      this.users = response;

    });
  }
  deleteUser(id:any){
    this.userService.delete(id).subscribe((response:any)=>{
      this.usersList()
      this.message = "utitlisateur"
      if(response.delete){
        this.message = "Utitlisateur supprimé avec succés"
      }else{
        this.message = "Impossible de supprimer ce utitlisateur"
      }
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })
  }
  createForm() {
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.userForm = this.fb.group({
      prenom: ['',Validators.required],
      nom: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern(emailPattern)]],
      password: ['', [Validators.required,Validators.min(4)]],
      confirm_password: ['', [Validators.required]],
      role: ['',Validators.required]

    },{
      validator: this.ConfirmedValidator('password', 'confirm_password')
    });
  }
  addUser(){
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.userService.add(this.userForm.value).subscribe((response:any)=>{
      this.usersList()
      this.userForm.value.reset
      this.message = "utitlisateur"
      if(response.delete){
        this.message = "Utitlisateur ajouté avec succés"
      }else{
        this.message = "Impossible d'ajouter ce utitlisateur"
      }
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })
  }
  findUser(user:any){
    this.userForm = this.fb.group({
      id: [user.id],
      prenom: [user.prenom, Validators.required ],
      nom: [user.nom, Validators.required ],
      email: [user.email, Validators.required ],
      password: ['', [Validators.required,Validators.min(4)]],
      confirm_password: ['', [Validators.required]],
      role: [user.role, Validators.required],
    });
    this.editMode = true
  }
  editUser(){
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.userService.edit(this.userForm.value).subscribe((response:any)=>{
      this.usersList()
      this.userForm.value.reset
      this.message = "Utitlisateur modifié avec succés"
      this.isMessage = true
      this.editMode = false
      setTimeout(()=>{
        this.isMessage = false
      },10000)
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
