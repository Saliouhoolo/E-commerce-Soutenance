import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: any;
  produitsForm!: FormGroup;
  editMode =false
  isSubmitted = false;
  imgURL: any;
  message : string =""
  isMessage = false
  categoryService: any;
  categoryList: any;
  constructor(private produitService:ProduitService
    ,private fb: FormBuilder,)
     {
      this.createForm()
      }
      get formControls() {
        return this.produitsForm.controls;
      }
    ngOnInit(): void {
      this. produitList()
    }
  produitList() {
    this.produitService.liste().subscribe((response: any) => {
      this.produits = response;
    });
  }
  createForm() {
    this.produitsForm= this.fb.group({
      libelle: ['',Validators.required],
      description: ['',Validators.required],
      quantite: ['',Validators.required],
      prixV: ['',Validators.required],
    });
  }
  editProduit()
  {
    this.isSubmitted = true;
    if (this.produitsForm.invalid) {
      return;
    }
    this.categoryService.edit(this.produitsForm.value).subscribe((response:any)=>{
      this.produitList()
      this.produitsForm.value.reset
      this.message = "Produits modifié avec succés"
      this.isMessage = true
      this.editMode = false
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })
  }
  addProduit()
  {
    this.isSubmitted = true;
    if (this.produitsForm.invalid) {
      return;
    }
    this.produitService.add(this.produitsForm.value).subscribe((response:any)=>{
      this.produitList()
      this.produitsForm.value.reset
      this.message = "Produits"
      if(response.delete){
        this.message = "Categories ajouté avec succés"
      }else{
        this.message = "Impossible d'ajouter votre Categories"
      }
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })
  }
  deleteProduit(id:any)
  {
    
    this.produitService.delete(id).subscribe((response:any)=>{
      this.produitList()
      this.message = "Produits"
      if(response.delete){
        this.message = "Produits supprimé avec succés"
      }else{
        this.message = "Impossible de supprimer ce Produits"
      }
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })
  }
  findproduit(produit:any){
    this.produitsForm = this.fb.group({
      id: [produit.id],
      Libelle: [produit.Libelle, Validators.required ],
      description: [produit.description, Validators.required ],
      qauntite: [produit.quantite, Validators.required ],
      prixV: [produit.prixV, Validators.required ],
    });
    this.editMode = true
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
