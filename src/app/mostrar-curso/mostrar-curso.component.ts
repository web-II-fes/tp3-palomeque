import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursoComponent } from "../Curso/curso.component";
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-mostrar-curso',
  templateUrl: './mostrar-curso.component.html',
  styleUrls: ['./mostrar-curso.component.css']
})
export class MostrarCursoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor', 'anyo', 'estado'];
  dataSource : any[] = [];

  formCurso : FormGroup;
   cursos : any[] = [];
   idCurso : any;

  constructor(private cursoService : CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.getCursos().subscribe((data: any) => {
      debugger;
      this.dataSource = data;
    });
  }

  editarCurso(curso: any){
    this.idCurso = curso._id;
    this.formCurso.patchValue({
      nombreCurso: curso.nombre,
      profesor: curso.profesor,
      anyo: curso.anyo,
      estado: curso.estado,
    });
  }

  borrarCurso(curso: any){
    this.idCurso = curso._id;
    this.cursoService.borrarCurso
    (this.idCurso).subscribe(respuesta => console.log( "Curso Eliminado" , curso ));
  }
}
