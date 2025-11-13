import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
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
