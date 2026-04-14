import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../core/directive/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage,RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  host:{
    id:"skills"
  }
})
export class Skills {
  private dataService = inject(DataService);
  skills = this.dataService.get('skills');
  showAllSkills: Record<string, boolean> = {};

toggleSkills(type: string) {
  this.showAllSkills[type] = !this.showAllSkills[type];
}

isExpanded(type: string): boolean {
  return this.showAllSkills[type] ?? false;
}
}
