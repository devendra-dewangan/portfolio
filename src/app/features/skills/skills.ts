import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  host:{
    id:"skills"
  }
})
export class Skills {
  private dataService = inject(DataService);
  skills = this.dataService.get('skills');
}
