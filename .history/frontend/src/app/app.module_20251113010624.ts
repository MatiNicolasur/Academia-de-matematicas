import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';

//Import para el Formulario de Contacto (para los Formularios en General probablemente)
import { Rective}

@NgModule({
  imports: [App, BrowserModule, FormsModule, HttpClientModule]
})
export class AppModule {}
