import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'Sistema de Admisión Academia de Matemáticas';
  applicant = { name: '', email: '', phone: '', reason: '' };
  message = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('/api/applicants', this.applicant).subscribe({
      next: () => {
        this.message = 'Postulación enviada correctamente.';
        this.applicant = { name: '', email: '', phone: '', reason: '' };
      },
      error: () => {
        this.message = 'Error al enviar la postulación.';
      }
    });
  }
}
