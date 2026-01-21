import { Component } from '@angular/core';
import { AdviceCardsComponent } from "./components/advice-cards/advice-cards.component";
import { ContactUsContentComponent } from "./components/contact-us-content/contact-us-content.component";

@Component({
  selector: 'app-contact-us',
  imports: [AdviceCardsComponent, ContactUsContentComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
