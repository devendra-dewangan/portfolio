import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { RevealDirective } from '../../core/directive/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  standalone:true
})
export class Experience {
  private dataService = inject(DataService);
  experience = this.dataService.get("experiences");
}
