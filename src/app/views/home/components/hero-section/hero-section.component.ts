import { Component } from '@angular/core';
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { HeroServiceCardsComponent } from "./components/hero-service-cards/hero-service-cards.component";
import { HeroSearchBarComponent } from "./components/hero-search-bar/hero-search-bar.component";

@Component({
  selector: 'app-hero-section',
  imports: [HeroSliderComponent, HeroServiceCardsComponent, HeroSearchBarComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
