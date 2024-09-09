import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { CatalogoUnicoService } from 'src/app/services/catalogo-unico.service';
import { CatalogoUnicoService } from 'src/app/services/catalogo-unico-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[CatalogoUnicoService]
})
export class SharedModule { }
