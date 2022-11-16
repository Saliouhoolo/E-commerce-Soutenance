import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
List =[
  {"id":"1","libelle":"légumes racine"},
  {"id":"2","libelle":"légumes tubercules"}
]
  ngOnInit(): void {
   // this.lister()
  }
  lister(){
    this.categoryService.liste().subscribe(
      (res:any)=>{
    this.List = res
      },
      err => {
        console.log(err)
      })
  }
  edit(){

  }
  add(){}
  delete(){}
}
