import { Component } from '@angular/core';

interface CardItem {
  id: number;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-advice-cards',
  imports: [],
  templateUrl: './advice-cards.component.html',
  styleUrl: './advice-cards.component.css'
})
export class AdviceCardsComponent {
  cards: CardItem[] = [
    { id: 1, icon: 'pi pi-home', title: 'Arriendos' },
    { id: 2, icon: 'pi pi-shopping-cart', title: 'Compras' },
    { id: 3, icon: 'pi pi-dollar', title: 'Ventas' },
    { id: 4, icon: 'pi pi-question-circle', title: 'Otras consultas' },
  ];
}
