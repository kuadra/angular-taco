import { Recipe } from '../enums/recipe';
import {ActionTypes} from './actions';

let state: InitialState = {
  recipes: [],
};

import { Subject } from 'rxjs';

export interface InitialState {
    recipes: Array<Object>;
}

export interface Event {
    type: String;
    payload?: Object;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_RECIPES:
      store.next(state);
      break;

    case ActionTypes.SAVE_RECIPE:
      state = {
        recipes: [...state.recipes, data.payload],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_RECIPE:
      const {recipes} = state;
      const id = data.payload;
      const updatedRecipes = recipes.filter((recipe: Recipe) => recipe.id !== id);
      state = {
        recipes: updatedRecipes
      };
      store.next(state);
      break;
    default:
      break;
  }
});