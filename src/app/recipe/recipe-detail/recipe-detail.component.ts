import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [`button { margin-right: 5px; }`]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeId: number;

  private subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      params => { 
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/rezepte']);
  }
}
