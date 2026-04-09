import { Routes } from '@angular/router';
import { MAIN_ROUTES } from './features/main.routes';

export const routes: Routes = [
    {
        path: '',
        children: [...MAIN_ROUTES]
    },
];
