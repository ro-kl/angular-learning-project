import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy', 'https://dummyimage.com/300.png/09f/fff', [
      new Ingredient('dummyIng1', 4),
      new Ingredient('dummyIng12', 2),
      new Ingredient('dummyIng13', 0.5)
    ]),
    new Recipe('Dummy2', 'Dummy', 'https://dummyimage.com/300.png/09f/fff', [
      new Ingredient('dummyIng2', 4)
    ]),
    new Recipe('Dummy3', 'Dummy', 'https://dummyimage.com/300.png/09f/fff', [
      new Ingredient('dummyIng3', 4)
    ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
