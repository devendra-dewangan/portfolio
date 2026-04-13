import { Component, inject } from '@angular/core';

import { Loader } from '../../shared/loader/loader';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-dashboard',
  imports: [Home,About,Experience,Education,Projects,Skills,Contact],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
