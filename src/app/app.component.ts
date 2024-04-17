import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuRecipe: boolean = true;
  menuShopping: boolean = false;
  loadedFeature = 'recipe'
  checkHeader(headerSelect: string) {

    this.loadedFeature = headerSelect;

  }

}
