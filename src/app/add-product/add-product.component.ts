import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/curd.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: any;
  Price: number;
  quantity: number;
  description: string;
  constructor(private crudService: CrudService) { }

  ngOnInit() {}

  addProduct() {
      let record = {};
      record['Name'] = this.productName;
      record['Price'] = this.Price;
      record['Quantity'] = this.quantity;
      record['description'] = this.description;
      this.crudService.create_NewProduct(record).then(resp => {
          console.log(resp);
      })
        .catch(error => {
          console.log(error);
        });
    }
  }

