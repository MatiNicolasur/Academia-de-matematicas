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
    rut = rut.replace(/\./g, '').replace('-', '');
    if (rut.length < 8) return false;

    const cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += multiplo * Number(cuerpo[i]);
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    const dvFinal = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

    return dvFinal === dv;
  }

  enviar() {
    this.enviado = true;

    const rut = this.rutForm.value.rut;

    this.rutValido = this.validarRut(rut);

    if (!this.rutValido) return;

    
  }
}
