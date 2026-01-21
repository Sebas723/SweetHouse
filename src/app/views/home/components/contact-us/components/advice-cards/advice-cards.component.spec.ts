import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceCardsComponent } from './advice-cards.component';

describe('AdviceCardsComponent', () => {
  let component: AdviceCardsComponent;
  let fixture: ComponentFixture<AdviceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
