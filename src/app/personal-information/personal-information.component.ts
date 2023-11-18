import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Manish Baghel'],
    ['DOB', '30/12/1999'],
    ['Work Exp', '2.5 Years'],
    ['Education', 'B.tech(2021)'],
    ['Interests', 'Cinephile, Cricket'],
  ];

  aboutMe: string[] = [
    'I am a Full Stack Developer with 2.5 + years of experience crafting Angular applications.',
    'My enthusiasm for technological innovation, commitment to continuous self - development, and focus on leadership skills make me an ideal candidate.',
    'Eager to contribute to cutting - edge projects and collaborate within dynamic teams.'
  ];

  constructor() { }

  ngOnInit(): void { }
}
