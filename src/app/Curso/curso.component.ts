import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from "../Curso/claseCurso";
import { CursoService } from './../servicios/curso.service'; 

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

   formCurso : FormGroup;
   cursos : any[] = [];
   idCurso : any;
   curso : any;
   param : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router, private cursoService: CursoService) { }

  ngOnInit() {
    	
      
      // this.getCurso();

      this.route.paramMap.subscribe((param) => {
        
        this.idCurso = param.get('id');

        if (this.idCurso !== 'new') {
            this.getCursoById(this.idCurso);
        }
        this.initForm(this.curso);
      });
  }

  

   initForm(editarCurso : Curso ){
  //    this.formCliente = this.fb.group({
    this.formCurso = this.fb.group({
      nombreCurso : ['', Validators.required],
      profesor : ['', Validators.required],
      anyo : ['', Validators.required],
      estado : ['', Validators.required],
     });
    }

    getCursoById(idCurso: String) {
      this.cursoService.getCursoById(idCurso).subscribe((data) => {
          
          let cursoId = data;

          this.formCurso.patchValue(cursoId);
      });
  }

    getCurso(){
      this.cursoService.getCursos().subscribe((cursos: any) =>{
        this.cursos = cursos;
      });
    }

    // editarCurso(curso: any){
    //   this.idCurso = curso._id;
    //   this.formCurso.patchValue({
    //     nombreCurso: curso.nombre,
    //     profesor: curso.profesor,
    //     anyo: curso.anyo,
    //     estado: curso.estado,
    //   });
    // }

    // borrarCurso(curso: any){
    //   this.idCurso = curso._id;
    //   this.cursoService.borrarCurso
    //   (this.idCurso).subscribe(respuesta => console.log( "Curso Eliminado" , curso ));
    // }

   enviar(){
    if(this.idCurso){
      this.cursoService.editarCurso(this.idCurso, this.formCurso.value).subscribe((curso) =>{
        
      });
  } else {
    this.cursoService.guardarCurso(this.formCurso.value).subscribe((curso) => {
      let cursoNuevo = curso;
    });
    }
    this.router.navigate(['/mostrar-curso-component']);
   };  
  
}
