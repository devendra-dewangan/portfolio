import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { DataService } from '../../core/service/data.service';
import { RevealDirective } from "../../core/directive/reveal.directive";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RevealDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
  isOpen = false;
}
