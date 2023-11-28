import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manish Baghel';
  constructor(private el: ElementRef) { }

  menuOpen = false;
  menuItems = [
    { label: 'Home', link: 'home' },
    { label: 'Personal Information', link: 'personal' },
    { label: 'Education', link: 'education' },
    { label: 'Work Experience', link: 'experience' },
    { label: 'Professional Skills', link: 'skills' },
    { label: 'Projects', link: 'projects' },
    { label: 'Contacts', link: 'contacts' },
  ];

  activeMenuItem: string | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string): void {
    const element = this.el.nativeElement.querySelector(`#${section}`);

    if (element) {
      this.activeMenuItem = section;
      const yOffset = this.menuOpen ? -285 : -11;
      const xOffset = -60;
      window.scrollTo({ top: element.offsetTop + yOffset + xOffset, behavior: 'smooth' });
    }
  }

}
