import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f', {static: false}) form: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex = null;
    editedItem: Ingredient;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                this.editMode = true;
                this.editedItem = this.shoppingListService.getIngredient(index);

                this.form.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmitItem(form: NgForm) {
        const value = form.value;

        const newIngredient = new Ingredient(value.name, value.amount);

        if(this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.addNewIngredient(newIngredient);
        }

        this.editMode = false;
        this.form.reset();
    }

    onClear() {
        this.editMode = false;
        this.form.reset();
    }

    onDelete() {
        if(this.editMode) {
            this.shoppingListService.removeIngredient(this.editedItemIndex);

            this.onClear();
        }
    }
}