import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

  protected readonly title = signal('my-portfolio');
showBackToTop = false;

  // Listen to scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 300; // show button after scrolling 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
