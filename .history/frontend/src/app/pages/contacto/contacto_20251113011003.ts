import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {

  contactoForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    
  }
}
