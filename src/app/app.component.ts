import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./common/main-header/main-header.component";
import { MainFooterComponent } from "./common/main-footer/main-footer.component";
import { MainNavComponent } from "./common/main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, MainFooterComponent, MainNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistemaJulio';
}
