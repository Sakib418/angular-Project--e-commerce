import { Component, OnInit,Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product.alerts',
  templateUrl: './product.alerts.component.html',
  styleUrls: ['./product.alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() product : Product;
  constructor() { }

  ngOnInit(): void {
  }

}