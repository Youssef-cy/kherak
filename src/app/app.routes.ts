import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [

    {
        path:'',
        component:Home
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
