import { Component } from '@angular/core';

interface CardItem {
  id: number;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-hero-service-cards',
  imports: [],
  templateUrl: './hero-service-cards.component.html',
  styleUrl: './hero-service-cards.component.css'
})

export class HeroServiceCardsComponent {

  cards: CardItem[] = [
    { id: 1, icon: 'pi pi-home', title: 'Arriendos' },
    { id: 2, icon: 'pi pi-shopping-cart', title: 'Compras' },
    { id: 3, icon: 'pi pi-dollar', title: 'Ventas' },
    { id: 3, icon: 'pi pi-phone', title: 'Asesorias' },
    { id: 3, icon: 'pi pi-users', title: 'Asociados' },
    { id: 3, icon: 'pi pi-comments', title: 'PQRS' },
  ];
}
