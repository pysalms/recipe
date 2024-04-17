import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
    ingredient: Ingredient[] = [new Ingredient('Tomato', '2'), new Ingredient('Onion', '1')];
    addNewItem(ingredient: Ingredient) {
        this.ingredient.push(ingredient)
    }
}