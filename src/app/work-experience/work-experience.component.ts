import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior System Engineer',
      company: 'Infosys',
      duration: 'June 2021 - Now',
      description: [
        'Working on the migration of legacy application to angular and handling java code for reverse engineering for leading institution client of Infosys.',
        'Experience working with HTML, CSS, JavaScript, Angular.',
        'Redeveloped KYC application for a bank using NGX formly framework.',
        'Working knowledge in the development of user interface. All the forms in this application are generated dynamically.',
        'Designed and created shared components which could be used seamlessly in any of the screen no matter what transactional data format that screen design would support.',
        'Code was written dynamic enough that any new requirements change does not effect the application.'
      ],
    },
    {
      role: 'WEB DEVELOPER',
      company: 'Spider Innovative Technologies',
      duration: 'Feb 2020 - May 2021',
      description: [
        'Managed all Tech part from server to website for all clients.',
        'Created multiple websited from scratch using HTML / CSS, Angular, NODE JS.',
        'Managed a team of interns and developers for a few projects.'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
