import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,          
  imports: [CommonModule,],   
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  // Method to scroll to a section
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
// isScrolled = false;
//   menuOpen = false;

//   @HostListener('window:scroll')
//   onScroll() {
//     this.isScrolled = window.scrollY > 50;
//   }

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }

//   closeMenu() {
//     this.menuOpen = false;
//   }
}