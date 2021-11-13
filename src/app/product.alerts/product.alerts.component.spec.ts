import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.AlertsComponent } from './product.alerts.component';

describe('Product.AlertsComponent', () => {
  let component: Product.AlertsComponent;
  let fixture: ComponentFixture<Product.AlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product.AlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
