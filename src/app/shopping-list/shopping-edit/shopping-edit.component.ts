import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
 @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
 constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onadd(){
    const ingName=this.nameInputRef.nativeElement.value
    const ingamount=this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value)
    this.slService.addIngredients(newIngredient);
    console.log(newIngredient)
  }

}
