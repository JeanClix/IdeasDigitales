import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectoresService } from '../../services/director/directores.service';

@Component({
  selector: 'app-directores',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './directores.component.html',
  styleUrl: './directores.component.css'
})
export class DirectoresComponent {
  directores: any[] = []

  constructor(private directoresService: DirectoresService){}

  directoresInsertForm = new FormGroup({
    nombres: new FormControl(),
    peliculas: new FormControl(),
  })

  directoresUpdateForm = new FormGroup({
    iddirector: new FormControl(),
    nombres: new FormControl(),
    peliculas: new FormControl(),
  })

  directoresDeleteForm = new FormGroup({
    iddirector: new FormControl(),
  })

  directorActualizar: any
  directorEliminar: any

  ngOnInit(): void {
    this.directoresService.getDirectores().subscribe(
      data =>  {
        this.directores = data
      }
    )
  }

  directoresInsert = (values: any) => {
    this.directoresService.insertDirectores(values.nombres, values.peliculas).subscribe(
      (data) =>  {
        console.log(data)
        this.ngOnInit()
        this.directoresInsertForm.reset();
        (document.querySelector("#insertModal .btn-close") as HTMLElement).click()
      }
    )
  }

  editDirector = (director: any) => {
      this.directorActualizar = director
  }

  directoresUpdate = (values: any) => {
    this.directoresService.updateDirectores(values.iddirector, values.nombres, values.peliculas).subscribe(
      (data) =>  {
        console.log(data)
        this.ngOnInit()
        this.directoresUpdateForm.reset();
        (document.querySelector("#updateModal .btn-close") as HTMLElement).click()
      }
    )
  }

  deleteDirector = (director: any) => {
    this.directorEliminar = director
  }

  directoresDelete = (values: any) => {
    this.directoresService.deleteDirectores(values.iddirector).subscribe(
      (data) =>  {
        console.log(data)
        this.ngOnInit();
        (document.querySelector("#deleteModal .btn-close") as HTMLElement).click()
      }
    )
  }
}
