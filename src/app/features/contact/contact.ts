import { Component, inject } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from "../../core/directive/reveal.directive";

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone : true
})
export class Contact {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
