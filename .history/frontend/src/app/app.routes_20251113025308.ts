import { Routes } from '@angular/router';
import { Contacto } from './pages/contacto/contacto';
import { Admision } from './'

export const routes: Routes = [
    { path: 'contacto', component: Contacto },
    { path: '', redirectTo: 'contacto', pathMatch: 'full' }
];
