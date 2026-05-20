import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Meals } from "./components/meals/meals";

@Component({
  selector: 'app-restaurants',
  imports: [Header, Meals],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.css',
})
export class Restaurants {

}
