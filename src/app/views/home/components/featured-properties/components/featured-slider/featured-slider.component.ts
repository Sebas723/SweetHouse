import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-slider',
  imports: [],
  templateUrl: './featured-slider.component.html',
  styleUrl: './featured-slider.component.css'
})
export class FeaturedSliderComponent {
  currentSlide = 0;

  slides = [
    {
      id: 1,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },
        {
      id: 1,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },
        {
      id: 2,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },
        {
      id: 3,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },
        {
      id: 4,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

            {
      id: 5,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

            {
      id: 6,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

                {
      id: 7,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

                    {
      id: 8,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

                    {
      id: 9,
      image: 'images/slider-destacados/apartamento_1.jpg',
      barrio: 'Barrio 1',
      ciudad: 'Medellin',
      title: 'Apartamento',
      price: '2.500.000',
    },

  ];

  next() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
