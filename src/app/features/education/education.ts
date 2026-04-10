import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
  host:{
    id:"education"
  }
})
export class Education {
  private dataService = inject(DataService);
  education = this.dataService.get('educations');
}
