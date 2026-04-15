import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from "../../core/directive/reveal.directive";

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone:true
})
export class Projects {
  private dataService = inject(DataService);
  project = this.dataService.get("projects");
}
