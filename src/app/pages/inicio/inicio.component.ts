import { Component } from '@angular/core';
import { MainBannerComponent } from "../../home/main-banner/main-banner.component";
import { NosotrosComponent } from "../../home/nosotros/nosotros.component";
import { NoticiasComponent } from "../../home/noticias/noticias.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MainBannerComponent, NosotrosComponent, NoticiasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
