import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit {
    ingerdients: Ingredient[] = [
        new Ingredient('Tomatoe', 2),
        new Ingredient('Cheese', 5),
    ];

    constructor() {}

    ngOnInit() {}
}