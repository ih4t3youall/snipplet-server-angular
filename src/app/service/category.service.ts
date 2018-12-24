import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Snipplet } from '../snipplet';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categories: Category[];


  addCategory(name: string) {

    this.categories.push(new Category(name));

  }

  addSnipplet(categoryName: string, snipplet: Snipplet) {

    console.log("adding snipplet to category: " + categoryName)
    for (let category of this.categories) {
      if (category.name == categoryName) {
        console.log("category exist.. adding ...")
        category.snipplets.push(snipplet);
      } else {
        //handle error
        console.log("category does not exists.")
      }
    }


  }

  deleteCategory(categoryName: string) {
    this.categories.filter(obj => obj.name !== categoryName);
  }

  deleteSnipplet(categoryName:string , snippletName:string) {
  }

  saveAll() {

  }
}
