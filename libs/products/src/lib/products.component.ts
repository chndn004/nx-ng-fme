import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '@nx-ng-fme/shared';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-ng-fme-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ HttpClientModule, ProductsService ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  data: any = [];

  constructor(private prodService: ProductsService) {}

  ngOnInit(){
    this.prodService.getAllProducts().subscribe(data => {
      this.data = data;
    });
  }

}
