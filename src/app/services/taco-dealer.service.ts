import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../enums/recipe';

@Injectable({
  providedIn: 'root'
})
export class TacoDealerService {

  constructor(private client : HttpClient) { }

  request(){
    return this.client.get<Recipe>("http://taco-randomizer.herokuapp.com/random/");
  }

  nextRecipe() {
    return this.client.get<Recipe>("http://taco-randomizer.herokuapp.com/random/");
  };
}
