import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2),
        new Ingredient('Onions', 10)
      ]
    ),
    new Recipe('Snitzel',
      'This is a great snitzel',
      'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      [
        new Ingredient('Potatoes', 4),
        new Ingredient('Salad', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
