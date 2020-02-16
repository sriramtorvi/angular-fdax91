import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pasta',
                   'Fusili pasta recipe',
                   'https://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg',
                   [
                       new Ingredient('Fusili',2),
                       new Ingredient('Broccoli',1)
                   ]),
        new Recipe('Paneer', 
                   'Matar paneer', 
                   'https://flockler.com/thumbs/sites/192/paneer_s600x600_c2737x1593_l2x707.jpg',
                   [
                       new Ingredient('Paneer', 20),
                       new Ingredient('Peas',50)
                   ])
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}