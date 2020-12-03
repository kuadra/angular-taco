import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from './store/index';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    store.subscribe((state) => {
      const { recipes } = state;
      this.recipes = recipes;
    });
  }
  recipes = [];

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_RECIPES });
  }
}
