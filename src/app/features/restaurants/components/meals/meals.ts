import { Component } from '@angular/core';
import { Category } from "../../../../shared/category/category";
import { Imeal } from '../../../../core/interfaces/meals/Imeal';
import { Smeals } from '../../../../core/Service/meals/Smeals';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-meals',
  imports: [Category],
  templateUrl: './meals.html',
  styleUrl: './meals.css',
})
export class Meals implements OnInit{

  items:Imeal[]=[]
  constructor(private foodservice: Smeals) { }

  ngOnInit(){


    this.foodservice.getfood().subscribe((response) => {
      this.items = response;
      console.log(this.items)
    })
  }
}
