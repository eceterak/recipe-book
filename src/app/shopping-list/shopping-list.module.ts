import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shoping-list-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ])
    ]
})

export class ShoppingListModule {}