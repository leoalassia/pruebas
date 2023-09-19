import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy  {

  contador: number;

  constructor(private servicio: ServicioService) {
    this.contador=0;
    console.log("soy el principal");
  }

  ngOnInit(): void {
    this.servicio.sumarContador();
    this.contador = this.servicio.getContador();
  }

  ngOnDestroy(): void {
    console.log("soy el principal, me han matado")
  }


  sumoContador(): number{
    this.contador++;
    console.log("soy la funcion que devuelve el contador");
    return this.contador;
  }

}
