import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursoComponent } from "../Curso/curso.component";
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from "../Curso/claseCurso";

@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor', 'anyo', 'estado', 'editar', 'borrar'];
  dataSource : any[] = [];

  formCurso : FormGroup;
   cursos : any[] = [];
   idCurso : any;
   

  constructor(private fb : FormBuilder, private cursoService : CursoService, private router : Router) { }

  ngOnInit(): void {
    this.getCursos();
  }

  initForm(editarCurso : Curso){
    //    this.formCliente = this.fb.group({
      this.formCurso = this.fb.group({
        nombre : [editarCurso ? editarCurso.nombreCurso :'', Validators.required],
        apellido : [editarCurso ? editarCurso.profesor :'', Validators.required],
        edad : [editarCurso ? editarCurso.anyo :'', Validators.required],
        estado : [editarCurso ? editarCurso.estado :'', Validators.required]
       });
      }

  getCursos(){
    this.cursoService.getCursos().subscribe((data: any) => {
      
      this.dataSource = data;
    });
  }

  editarCurso(idCurso){
   
      this.router.navigate(['/curso-component/', idCurso]);
    
  }

  borrarCurso(curso: any){
    this.idCurso = curso._id;
    this.cursoService.borrarCurso
    (this.idCurso).subscribe(( data: any ) =>{
      let cursoBorrado = curso;
    });
    location.reload();
  }
  
}
