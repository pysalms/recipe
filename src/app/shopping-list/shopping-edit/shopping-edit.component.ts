import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('item', { static: false })
  itemName!: ElementRef;
  @ViewChild('quant', { static: false })
  quantityRef!: ElementRef;

  @Output() addItemEvent = new EventEmitter<{ name: string; quantity: string }>();

  onAdd() {
    const name = this.itemName.nativeElement.value;
    const quantity = this.quantityRef.nativeElement.value;
    const newIngredient = new Ingredient(name, quantity)
    this.addItemEvent.emit(newIngredient)
  }
}
