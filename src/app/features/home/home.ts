import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from "@angular/common";
import { RevealDirective } from "../../core/directive/reveal.directive";

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true
})

export class Home {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
