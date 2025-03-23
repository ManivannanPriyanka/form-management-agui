import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormgroupshomeComponent } from "./components/formgroupshome/formgroupshome.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormgroupshomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-management-app';
}
