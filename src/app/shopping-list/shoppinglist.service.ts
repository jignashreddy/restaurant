import {Ingredient} from '../shared/ingredients.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients:Ingredient[] =[
        new Ingredient('apples',23),
        new Ingredient('orange',13)
      ];


      getIngredients(){
          return this.ingredients.slice()
      }
      addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredientss(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}