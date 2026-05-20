import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  currentRoute:String = '';
  constructor(private router:Router){
    this.router.events.subscribe(()=>{
      this.currentRoute = this.router.url;
      console.log(this.currentRoute)
    })
  }

  
isOpen = false;
}
