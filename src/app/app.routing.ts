import { Routes, RouterModule } from "@angular/router";

import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "./recipe/recipe.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/rezepte', pathMatch: 'full' },
    { path: 'rezepte', component: RecipeComponent, children: RECIPE_ROUTES },
    { path: 'einkaufsliste', component: ShoppingListComponent },
    { path: '**', redirectTo: '/rezepte' },
];

export const routing = RouterModule.forRoot(APP_ROUTES);