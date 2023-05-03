import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BanerComponent } from './baner/baner.component';

const routes: Routes = [
  { path: '', component: BanerComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'personal', component: PersonalInformationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
