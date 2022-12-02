import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import {CategoryService} from "../../services/category.service";

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
  categoryList: any;
  image: string = "";
  bigSize:string="";
  showMedia : boolean = false
  categories: any;
  ImageDirectoryPath :any ="http://127.0.0.1:8081/"
  defaultImageCours= "assets/img/cart/cart-1.jpg"
  constructor(private produitService:ProduitService,private fb: FormBuilder,private categoryService: CategoryService)
     {
      this.createForm()
      }
      get formControls() {
        return this.produitsForm.controls;
      }
    ngOnInit(): void {
      this. produitList()
      this. CategoryList()
    }
  CategoryList() {
    this.categoryService.liste().subscribe((response: any) => {
      this.categories = response;
    });
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
      qte: ['',Validators.required],
      prix: ['',Validators.required],
      category: ['',Validators.required]
    });
  }
  editProduit()
  {
    this.isSubmitted = true;
    if (this.produitsForm.invalid) {
      return;
    }
    this.produitService.edit(this.produitsForm.value).subscribe((response:any)=>{
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
    this.produitService.add(this.produitsForm.value,this.image).subscribe((response:any)=>{
      this.produitList()
      this.produitsForm.value.reset
      this.message = "Produits"
      if(response.delete){
        this.message = "Produits ajouté avec succés"
      }else{
        this.message = "Impossible d'ajouter votre Produits"
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
      qte: [produit.qte, Validators.required ],
      prix: [produit.prix, Validators.required ],
      category: [produit.category, Validators.required ],
    });
    this.editMode = true
  }
  public onFileUploade(url:any) {
    if( url.target.files[0].size/1024/1024 > 5){
      this.bigSize = "votre image est volumineuse elle ne doit dépassé 5 MO"
      this.showMedia = false
      return
    }
    this.image = url.target.files[0];
  }
}
