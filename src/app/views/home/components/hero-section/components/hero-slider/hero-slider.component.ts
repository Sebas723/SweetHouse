import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

interface Slide {
  id: number;
  image: string;
  title: string;
}

@Component({
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.css'
})
export class HeroSliderComponent implements OnInit, OnDestroy {

  slide: Slide[] = [
    {
      id: 1,
      image: 'images/slider/medellin.jpg',
      title: 'Medellin',
    },
    {
      id: 2,
      image: 'images/slider/apartamento_1.jpg',
      title: 'Apartamento 1',
    },
    {
      id: 3,
      image: 'images/slider/apartamento_2.jpg',
      title: 'Apartamento 2',
    },
    {
      id: 4,
      image: 'images/slider/apartamento_3.jpg',
      title: 'Apartamento 3',
    },
  ];

  slides = [0, 1, 2, 3];
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000); // 4 segundos
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  resetAutoPlay(): void {
    clearInterval(this.intervalId);
    this.startAutoPlay();
  }
}
