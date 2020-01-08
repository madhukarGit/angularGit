import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:recipe[] = [
    new recipe("test recipe","simply a test","")
  ];
  constructor() { }

  ngOnInit() {
  }

}
