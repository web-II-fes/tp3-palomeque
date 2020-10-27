import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from './persona';

@Component({
    selector: 'app-array',
    templateUrl: './array.component.html',
    styleUrls: ['./array.component.css']
  })
  export class ArraysComponent implements OnInit {
  
    personas: Persona[] = [];
    persona: Persona;
    nombre: string;
    edad: number;

    constructor(private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      this.getPersonas();
    }

    getPersonas(){
        this.personaService.getPersonas().subscribe(( data : any ) => { 
          this.personas = data;
          return data;
        });
      }

    joinSplit(){
      let str = this.personas.join(" + ");
      str = JSON.stringify(this.personas);
      console.log("String : " + str);
      console.log(str.split(','));
    }

    reverse(){
      let str = this.personas;
      let str2 = str.reverse();
      console.log(str2);        
    }

    splice(){
      let aux = this.personas.splice(0,2);
      console.log(aux);
    }

    sort(){
      console.log(this.personas.sort());
    }

    indexOf(nombre: string){
      this.nombre = nombre;
      console.log(nombre.indexOf(nombre, 2));
    }

    lastIndexOf(nombre: string){
      this.nombre = nombre;
      console.log(nombre.lastIndexOf(nombre, 3));
    }

    includes(nombre: string){
      this.nombre = nombre;
      console.log(nombre.includes(nombre));
    }

    find(){
      console.log(this.personas.find(this.mayorADiez));
    }

    mayorADiez(persona: Persona) {
      return persona.edad > 10;
    }

    map(){
      console.log(this.personas.map(this.mayorAVeinte));
    }

    mayorAVeinte(persona: Persona) {
      return persona.edad > 20;
    }

    filter(){
      console.log(this.personas.filter(this.menorA));
    }

    menorA(persona: Persona) {
      return persona.edad < 25;
    }
} 