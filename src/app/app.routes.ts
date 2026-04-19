import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';

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
        path:"**",
        component:Notfound
    }

];
