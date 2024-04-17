import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeSelectFromList = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }
  recipeList: Recipe[] = [];

  ngOnInit() {
    this.recipeList = this.recipeService.recipes
  }
  onRecipeSelect(recipe: Recipe) {
    this.recipeSelectFromList.emit(recipe);
  }

}
