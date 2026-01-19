import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroServiceCardsComponent } from './hero-service-cards.component';

describe('HeroServiceCardsComponent', () => {
  let component: HeroServiceCardsComponent;
  let fixture: ComponentFixture<HeroServiceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroServiceCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroServiceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
