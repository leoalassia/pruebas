import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private contador: number;

  constructor() { 
    console.log("soy el constructor del servicio");
    this.contador=0;
   }

   sumarContador() {
    console.log("servicio: funcion contar");
    this.contador++;
   }

   getContador():number{
    return this.contador;
   }
}
