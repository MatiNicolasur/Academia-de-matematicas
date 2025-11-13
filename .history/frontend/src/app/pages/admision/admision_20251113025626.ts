import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admision',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admision.html',
  styleUrl: './admision.scss',
})
export class Admision {

  rutForm: FormGroup;
  enviado = false;
  rutValido = true;

  constructor(private fb: FormBuilder) {
    this.rutForm = this.fb.group({
      rut: ['', Validators.required]
    });
  }

  validarRut(rut: string): boolean {
    rut = rut.slice
  }
}
