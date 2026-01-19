import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchBarComponent } from './hero-search-bar.component';

describe('HeroSearchBarComponent', () => {
  let component: HeroSearchBarComponent;
  let fixture: ComponentFixture<HeroSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
