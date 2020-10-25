import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonaComponent } from './../Persona/persona.component';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Persona } from "../Persona/clasePersona";

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'editar', 'borrar'];
  dataSource : any[] = [];

  formCliente : FormGroup;
   personas : any[] = [];
   idPersona : any;
    persona : any;

  constructor(private fb : FormBuilder, private personaService : PersonaService, private router : Router) { }

  ngOnInit(): void {
    this.getPersonas();
    this.initForm(this.persona);
  }
  nombreControl = new FormControl('User');

  initForm(editarPersona : Persona){
    //    this.formCliente = this.fb.group({
      this.formCliente = this.fb.group({
        nombre : [editarPersona ? editarPersona.nombre :'', Validators.required],
        apellido : [editarPersona ? editarPersona.apellido :'', Validators.required],
        edad : [editarPersona ? editarPersona.edad :'', Validators.required]
       });
      }

  getPersonas(){
    this.personaService.getPersonas().subscribe((data: any) => {
      
      this.dataSource = data;
    });
  }

  recibePersona(persona : PersonaComponent){
    
    this.dataSource.push(persona);
  }

  editarPersona(persona: any){
    // this.idPersona = persona._id;
    // this.formCliente.patchValue({
      let personatemp : Persona = {
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    }

    this.router.navigate(['/persona-component', persona]);
  }
    
  borrarPersona(persona: any){
    this.idPersona = persona._id;
    this.personaService.borrarPersona
    (this.idPersona).subscribe(respuesta => console.log( "Eliminado" , persona ));
  }

}