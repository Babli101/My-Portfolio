import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit, OnDestroy {

  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  index = 0;
  totalSlides = 0;
  intervalId: any;

  ngAfterViewInit(): void {
    this.totalSlides = this.track.nativeElement.children.length;
    this.startAutoPlay();
  }

  next(): void {
    this.index = (this.index + 1) % this.totalSlides;
    this.updateSlide();
    this.restartAutoPlay();
  }

  prev(): void {
    this.index = (this.index - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlide();
    this.restartAutoPlay();
  }

  private updateSlide(): void {
    this.track.nativeElement.style.transform =
      `translateX(-${this.index * 100}%)`;
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000); // ⏱ 4 seconds
  }

  private restartAutoPlay(): void {
    clearInterval(this.intervalId);
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  
}
