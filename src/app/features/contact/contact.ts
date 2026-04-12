import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  host:{
    id:"contact"
  }
})
export class Contact {
  private dataService = inject(DataService);

  profile = this.dataService.get('profile');
}
