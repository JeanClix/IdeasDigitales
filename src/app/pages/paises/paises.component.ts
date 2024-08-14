import { Component } from '@angular/core';
import { PaisesService } from '../../services/pais/paises.service';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paises: any[] = []
  showAlert: boolean = false;

  constructor(private paisService: PaisesService){}

  paisesInsertForm = new FormGroup({
    codigo: new FormControl(),
    pais: new FormControl(),
    capital: new FormControl(),
    area: new FormControl(),
    poblacion: new FormControl(),
    continente: new FormControl(),
  })

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      data =>  {
        this.paises = data
      }
    )
  }

  paisesInsert = (values: any) => {
    this.paisService.insertPais(values.codpais, values.pais,values.capital, values.area,values.poblacion, values.continente).subscribe(
      (data) =>  {
        console.log(data)
        this.ngOnInit()
        this.paisesInsertForm.reset();
        (document.querySelector("#insertModal .btn-close") as HTMLElement).click()
        this.showAlert = true;
      }
    )
  }
}
