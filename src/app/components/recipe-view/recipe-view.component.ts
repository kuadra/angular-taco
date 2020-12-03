import { Component, OnInit, Injectable } from '@angular/core';
import { ActionTypes } from '../../store/actions';
import { HttpClient } from '@angular/common/http';
import { TacoDealerService } from '../../services/taco-dealer.service';
import { v4 as uuidv4 } from 'uuid';
import { Recipe } from 'src/app/enums/recipe';
import { eventDispatcher, store } from 'src/app/store';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RecipeViewComponent implements OnInit {
  recipes = [];
  currentRecipe: Recipe = {
    id : null,
    base_layer: null,
    condiment: null,
    mixin: null,
    seasoning: null,
    shell: null
  }

  constructor(private client: HttpClient, private tacoDealer: TacoDealerService) {
      store.subscribe((state) => {
        const { recipes } = state;
        this.recipes = recipes;
      });
  }

  ngOnInit(): void {
  }

  saveRecipe() {
    if(this.recipes.filter(item => item.id === this.currentRecipe.id).length===0){
      eventDispatcher.next({ type: ActionTypes.SAVE_RECIPE, payload: this.currentRecipe });
    }
  }

  nextRecipe() {
    this.tacoDealer.nextRecipe().subscribe((res: Recipe) => {
      this.currentRecipe = {id:uuidv4(), ...res};
      console.log(this.currentRecipe);
    });
    console.log(this.recipes)
  }
}