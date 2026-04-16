import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from "@angular/common";
import { RevealDirective } from "../../core/directive/reveal.directive";

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone : true
})
export class About {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
  skills = this.dataService.get('skills');
}
