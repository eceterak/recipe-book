import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Best pizza recipe', 'This pizza is da best', 'https://s3.przepisy.pl/przepisy3ii/img/variants/1099x618/pizza-grecka.jpg'),
        new Recipe('Best pizza recipe', 'This pizza is da best', 'https://s3.przepisy.pl/przepisy3ii/img/variants/1099x618/pizza-grecka.jpg')
    ];

    constructor() {}

    ngOnInit() {}
}