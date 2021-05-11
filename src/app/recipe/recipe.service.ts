import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

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

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }
}
