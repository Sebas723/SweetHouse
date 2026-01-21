import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFooterComponent } from './featured-footer.component';

describe('FeaturedFooterComponent', () => {
  let component: FeaturedFooterComponent;
  let fixture: ComponentFixture<FeaturedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
