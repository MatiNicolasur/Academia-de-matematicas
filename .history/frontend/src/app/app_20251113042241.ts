import { Component } from '@angular/core';
import { Admision } from './pages/admision/admision';
import { Contacto } from './pages/contacto/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Admision,
    Contacto
  ],
  templateUrl: './app.html',
  styleUrl:
})