import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    ingredientSubscription: Subscription;

    constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) {}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientSubscription = this.shoppingListService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        )

        this.loggingService.printLog('Hi from shopping list service.');
    }

    ngOnDestroy() {
        this.ingredientSubscription.unsubscribe();
    }

    onEditItem(i: number) {
        this.shoppingListService.startedEditing.next(i);
    }
}