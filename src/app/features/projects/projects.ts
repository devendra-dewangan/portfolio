import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  host:{
    id:"project"
  }
})
export class Projects {
  private dataService = inject(DataService);
  project = this.dataService.get("projects");
}
