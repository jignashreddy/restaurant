import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe:Recipe
  constructor(private receipeService:RecipeService,private route:ActivatedRoute) { }
  id:number;
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
        this.id=+params['id'];
        this.recipe = this.receipeService.getrecipe(this.id)
    });

  }

  addtoshoppingList(){
    this.receipeService.addtoShoppingList(this.recipe.ingredients)
  }

}
