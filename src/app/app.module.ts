import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { SavedRecipesComponent } from './components/saved-recipes/saved-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeViewComponent,
    RecipeComponent,
    SavedRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
