import { Routes } from '@angular/router';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: 'contacto', component: Contacto },
    { path: '', redirectTo: 'contacto', pathMatch: 'full' }
];
