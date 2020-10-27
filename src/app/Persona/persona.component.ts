import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from "../Persona/clasePersona";
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
   param : any;
   persona : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router, private personaService: PersonaService) { }

  ngOnInit() {
      // this.getPersona();	
      
      
      // this.param =this.route.snapshot.params;
      
      // if (Object.keys(this.param).length) {
      //   this.persona = this.param;
      // }
      this.route.paramMap.subscribe((param) => {
        
        this.idPersona = param.get('id');

        if (this.idPersona !== 'new') {
            this.getPersonaById(this.idPersona);
        }
});

      this.initForm(this.persona);
  }

  // nombreControl = new FormControl('User');

   initForm(editarPersona : Persona){
 
    this.formCliente = this.fb.group({
      nombre : [editarPersona ? editarPersona.nombre:'', Validators.required],
      apellido : [editarPersona ? editarPersona.apellido:'', Validators.required],
      edad : [editarPersona ? editarPersona.edad:'', Validators.required]
     });
    }

    getPersonaById(idPersona: String) {
      this.personaService.getPersonaById(idPersona).subscribe((data) => {
          
          let personaId = data;

          this.formCliente.patchValue(personaId);
      });
  }

    getPersona(){
      this.personaService.getPersonas().subscribe((personas: any) =>{
        this.personas = personas;
      });
    }

   

   enviar(){
    if(this.idPersona){
      this.personaService.editarPersona(this.idPersona, this.formCliente.value).subscribe(persona =>{
        
      });
  } else {
    this.personaService.guardarPersona(this.formCliente.value).subscribe(persona => {
      let personaNueva = persona;
    });
    }
    this.router.navigate(['/mostrar-persona-component']);
   };  
  
}


