import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from './shared/ingredients.model';
import { ShoppingListService } from './shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>();
    private recipes:Recipe[] =[
        new Recipe('Stuffed Sweet Potatoes','Stumped for healthy dinner ideas? Make stuffed sweet potatoes! These 4 stuffed sweet potato recipes are all easy, cozy, delicious, and fun!','https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg',[
            new Ingredient('potatos',5),new Ingredient('onions',4),new Ingredient('peas',5)
        ]),
        new Recipe('Best Deviled Eggs','Learn how to make the BEST deviled eggs! Sweet pickle relish, Dijon mustard, and Greek yogurt make their filling creamy, rich, and tangy.','https://cdn.loveandlemons.com/wp-content/uploads/2020/04/deviled-eggs.jpg',[
            new Ingredient('eggs',5),new Ingredient('corriander',3),new Ingredient('peas',5)
        ])
      ];

    constructor(private shoppingListSevrvice:ShoppingListService){}
    getrecipes(){
        return this.recipes.slice();
    }

    addtoShoppingList(ingredients:Ingredient[]){
        this.shoppingListSevrvice.addIngredientss(ingredients)
    }

    getrecipe(index:number){
        return this.recipes[index];
    }
}