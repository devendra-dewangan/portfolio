import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [NgOptimizedImage],
  templateUrl: './education.html',
  styleUrl: './education.css',
  standalone:true
})
export class Education {
  private dataService = inject(DataService);
  education = this.dataService.get('educations');
}
