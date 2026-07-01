import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTop } from './menu-top/menu-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('korrasti');
}
