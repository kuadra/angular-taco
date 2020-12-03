import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/enums/recipe';
import {eventDispatcher} from '../../store';
import {ActionTypes} from '../../store/actions';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

  @Input() item: Recipe;

  constructor() { }
  ngOnInit() {
  }

  deleteRecipe(id) {
    const shouldDelete = confirm('Are you sure you want to delete this recipe?');

    if (shouldDelete) {
      eventDispatcher.next({type: ActionTypes.DELETE_RECIPE, payload: id});
    }
  }

}




