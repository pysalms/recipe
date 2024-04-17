import { Component, Input } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent {
  @Input() displayRecipe = false;

  selectedRecipe: any;

  showRecipeDetail(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
