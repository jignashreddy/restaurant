import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../.././recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[];

   @Output() recipeSelect = new EventEmitter<Recipe>()
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getrecipes()
  }
  recipeSelected(data){
    this.recipeSelect.emit(data)
  }

}
