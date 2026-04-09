import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
