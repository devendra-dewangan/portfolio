import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DataService } from '../../core/service/data.service';
import { About } from "../about/about";
import { Loader } from '../../shared/loader/loader';
import { Projects } from "../projects/projects";
import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Contact } from "../contact/contact";
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Loader, Projects, Experience, Education, Contact, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private dataService = inject(DataService);
  profile = this.dataService.get('profile');
}
