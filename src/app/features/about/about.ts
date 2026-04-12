import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
  host:{
    id:"about"
  }
})
export class About {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
