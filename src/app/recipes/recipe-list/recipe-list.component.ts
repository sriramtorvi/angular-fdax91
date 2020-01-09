import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is just a test', 'https://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg'),
    new Recipe('Test recipe', 'This is just a test', 'https://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg')
  ];
  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelectedEmit(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
