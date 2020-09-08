import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonaService } from './../servicios/persona.service'; 

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

   formCliente : FormGroup;
   personas : any[] = [];
   idPersona : any;

  constructor(private fb : FormBuilder, private router : Router, private personaService: PersonaService) { }

  ngOnInit() {
    debugger;		
      this.initForm();
      this.getPersona();
  }

  nombreControl = new FormControl('User');

   initForm(){
  //    this.formCliente = this.fb.group({
    this.formCliente = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required],
     });
    }

    getPersona(){
      this.personaService.getPersonas().subscribe((personas: any) =>{
        this.personas = personas;
      });
    }

    editarPersona(persona: any){
      this.idPersona = persona._id;
      this.formCliente.patchValue({
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad
      });
    }

    borrarPersona(persona: any){
      this.idPersona = persona._id;
      this.personaService.borrarPersona
      (this.idPersona).subscribe((respuesta) => console.log( "Eliminado" , persona ));
    }

   enviar(){
    if(this.idPersona){
      this.personaService.editarPersona(this.idPersona, this.formCliente.value).subscribe((persona) =>{
        console.log("Persona Editada: ", persona);
      });
  } else {
    this.personaService.guardarPersona(this.formCliente.value).subscribe((persona) => {
      console.log("Persona Nueva: ", persona);
    });
    }
   };  
  
}

