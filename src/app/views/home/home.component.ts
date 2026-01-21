import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FeaturedPropertiesComponent } from "./components/featured-properties/featured-properties.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, NavbarComponent, FeaturedPropertiesComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
