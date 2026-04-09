import { Routes } from "@angular/router";
import { MainLayout } from "../layout/main-layout";

export const MAIN_ROUTES:Routes =[
    {
        path:'',
        component:MainLayout,
        children:[
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
            },
            {
                path: 'home',
                loadComponent: () => import(('./home/home')).then(c=>c.Home)
            },
            {
                path: 'project',
                loadComponent: () => import(('./projects/projects')).then(c=>c.Projects)
            },
            {
                path: 'contact',
                loadComponent:  () => import(('./contact/contact')).then(c=>c.Contact)
            },
            {
                path: 'about',
                loadComponent: () => import(('./about/about')).then(c=>c.About)
            },
            {
                path: 'project',
                loadComponent: ()  => import(('./projects/projects')).then(c=>c.Projects)
            },
            {
                path: 'skills',
                loadComponent:  () => import(('./skills/skills')).then(c=>c.Skills)
            },
            {
                path: 'experience',
                loadComponent:   () => import(('./experience/experience')).then(c=>c.Experience)
            }
        ]
    }
];