import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  contador: number;

  constructor() {
    this.contador=0;
    console.log("soy el principal");
  }

  sumoContador(): number{
    this.contador++;
    console.log("soy la funcion que devuelve el contador");
    return this.contador;
  }

}
