import { Routes } from '@angular/router';
import { Contacto } from './pages/contacto/contacto';
import { Admision } from './pages/admision/admision';

export const routes: Routes = [
    { path: 'contacto', component: Contacto },
    
    { path: '', redirectTo: 'contacto', pathMatch: 'full' }
];
