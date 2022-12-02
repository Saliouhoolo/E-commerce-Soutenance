import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  categoriesForm!: FormGroup;
  editMode =false
  isSubmitted = false;
  message : string =""
  isMessage = false
  constructor(private categoryService:
    CategoryService,
    private fb: FormBuilder,)
    {
      this.createForm()
    }
    get formControls() {
      return this.categoriesForm.controls;
    }
  ngOnInit(): void {
    this. CategoryList()
  }
  CategoryList() {
    this.categoryService.liste().subscribe((response: any) => {
      this.categories = response;
    });
  }
  editCategory()
  {
    this.isSubmitted = true;
    if (this.categoriesForm.invalid) {
      return;
    }
    this.categoryService.edit(this.categoriesForm.value).subscribe((response:any)=>{
      this.CategoryList()
      this.categoriesForm.value.reset
      this.message = "Categories modifié avec succés"
      this.isMessage = true
      this.editMode = false
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })

  }
  addCategory(){
    this.isSubmitted = true;
    if (this.categoriesForm.invalid) {
      return;
    }
    this.categoryService.add(this.categoriesForm.value).subscribe((response:any)=>{
      this.CategoryList()
      this.categoriesForm.value.reset
      this.message = "Categories"
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
  deleteCategory(id:any)
  {
    this.categoryService.delete(id).subscribe((response:any)=>{
      this.CategoryList()
      this.message = "categorie"
      if(response.delete){
        this.message = "categories supprimé avec succés"
      }else{
        this.message = "Impossible de supprimer votre categorie"
      }
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
      },10000)
    })

  }
  findCategory(categorie:any){
    this.categoriesForm = this.fb.group({
      id: [categorie.id],
      libelle: [categorie.libelle, Validators.required ]
    });
    this.editMode = true
  }
  createForm() {
    this.categoriesForm= this.fb.group({
      libelle: ['',Validators.required]
    });
  }
}
