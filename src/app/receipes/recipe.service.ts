import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Sambar', 'south indian traditional dish', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Rasam', 'south indian traditional dish', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Pongal', 'south indian breakfast traditional dish', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ];
  constructor() { }


}
