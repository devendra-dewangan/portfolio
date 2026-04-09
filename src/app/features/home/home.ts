import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
