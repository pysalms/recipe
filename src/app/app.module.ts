import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeListComponent } from './receipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './receipes/recipe-list/recipe-item/recipe-item.component';
import { SharedComponent } from './shared/shared.component';
import { ToggleDirective } from './Directives/toggle/toggle.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ReceipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    SharedComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
