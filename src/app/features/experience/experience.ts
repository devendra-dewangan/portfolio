import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  standalone:true
})
export class Experience {
  private dataService = inject(DataService);
  experience = this.dataService.get("experiences");
}
