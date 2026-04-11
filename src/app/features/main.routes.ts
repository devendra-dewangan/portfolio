import { Routes } from "@angular/router";
import { MainLayout } from "../layout/main-layout";

export const MAIN_ROUTES:Routes =[
    {
        path:'',
        component:MainLayout,
        children:[
            {
                path: '',
                loadComponent: () => import(('./home/home')).then(c=>c.Home)
            }
        ]
    }
];