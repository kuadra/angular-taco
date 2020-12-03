import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from 'src/app/store';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  recipes = [];

  constructor() {
    store.subscribe((state) => {
      const { recipes } = state;
      this.recipes = recipes;
    });
  }

  ngOnInit(): void {
  }

}
