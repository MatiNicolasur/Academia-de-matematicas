import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
    this.enviado = true;

    if (this.contactoForm.invalid) return;

    console.log('Formulario Enviado:', this.contactoForm.value);

    alert('Formulario Enviado (Simulación).');

    this.contactoForm.reset();
    this.enviado = false;
  }
}
