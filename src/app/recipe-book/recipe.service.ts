import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Best pizza recipe', 
    //         'This pizza is da best', 
    //         'https://s3.przepisy.pl/przepisy3ii/img/variants/1099x618/pizza-grecka.jpg',
    //         [
    //             new Ingredient('Dough', 1),
    //             new Ingredient('Cheese', 5)
    //         ]
    //     ),
    //     new Recipe(
    //         'Kebab recipe', 
    //         'MMmmmmmmmm', 
    //         'https://s3.przepisy.pl/przepisy3ii/img/variants/1099x618/pizza-grecka.jpg',
    //         [
    //             new Ingredient('Dough', 1),
    //             new Ingredient('Cheese', 5)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];

        // const recipe = this.recipes.find(
        //     (r) => {
        //         return r.name = name;
        //     }
        // );

        // return recipe;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}