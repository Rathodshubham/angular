import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
    } else {
      // Handle the case where the 'id' is not present, e.g., redirect or set a default value
      this.productId = 0; // or any other default value
    }
  }
}
