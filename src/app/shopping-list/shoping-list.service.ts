import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingerdients: Ingredient[] = [
        new Ingredient('Tomatoe', 2),
        new Ingredient('Cheese', 5),
    ];

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredients() {
        return this.ingerdients.slice();
    }

    addNewIngredient(ingredient: Ingredient) {
        this.ingerdients.push(ingredient);
        this.ingredientsChanged.next(this.ingerdients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingerdients.push(...ingredients);
        this.ingredientsChanged.next(this.ingerdients.slice());
    }

    getIngredient(index: number) {
        return this.ingerdients[index];
    }

    updateIngredient(index: number, updated: Ingredient) {
        this.ingerdients[index] = updated;
        this.ingredientsChanged.next(this.ingerdients.slice());
    }

    removeIngredient(index: number) {
        this.ingerdients.splice(index, 1);
        this.ingredientsChanged.next(this.ingerdients.slice());
    }
}