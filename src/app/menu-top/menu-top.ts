import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-top',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menu-top.html',
  styleUrl: './menu-top.css',
})
export class MenuTop {
  isLogged =true;
  username="hammoud" //will be changed later
  quit() {
    this.isLogged =false //will be changed
  }
}
