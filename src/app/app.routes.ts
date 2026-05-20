import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Notfound } from './features/notfound/notfound';
import { SignUp } from './features/sign-up/sign-up';
import { Restaurants } from './features/restaurants/restaurants';

export const routes: Routes = [

    {
        path:'',
        component:Home
    },
    {
        path:'Restaurants',
        component:Restaurants
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'signup',
        component:SignUp
    },


    {
        path:"**",
        component:Notfound
    }

];
