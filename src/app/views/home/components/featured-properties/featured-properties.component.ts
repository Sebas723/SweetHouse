import { Component } from '@angular/core';
import { FeaturedSliderComponent } from "./components/featured-slider/featured-slider.component";
import { FeaturedHeaderComponent } from "./components/featured-header/featured-header.component";
import { FeaturedFooterComponent } from "./components/featured-footer/featured-footer.component";

@Component({
  selector: 'app-featured-properties',
  imports: [FeaturedSliderComponent, FeaturedHeaderComponent, FeaturedFooterComponent],
  templateUrl: './featured-properties.component.html',
  styleUrl: './featured-properties.component.css'
})
export class FeaturedPropertiesComponent {

}
