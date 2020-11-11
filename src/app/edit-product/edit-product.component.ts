import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../services/curd.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() id: any;
  productName: any;
  Price: number;
  quantity: number;
  description: string;
  products: any;
  pid: any;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Product(this.id).subscribe(data => {
      // this.products = data.map(e => {
      // this.pid = e.payload.doc.id;
      // return {
      //     id: e.payload.doc.id,
      //     isEdit: true,
      //     Name: e.payload.doc.data()['Name'],
      //     Price: e.payload.doc.data()['Price'],
      //     Quantity: e.payload.doc.data()['Quantity'],
      //     Description: e.payload.doc.data()['description'],
      //   };
      // });
      console.log(data.payload);
    });
  }
  //   this.crudService.read_Product(this.id).subscribe(data => {
  //     this.products = data.map(e => {
  //       return {
  //         id: e.payload.doc.id,
  //         isEdit: false,
  //         Name: e.payload.doc.data()['Name'],
  //         Price: e.payload.doc.data()['Price'],
  //         Quantity: e.payload.doc.data()['Quantity'],
  //         Description: e.payload.doc.data()['description'],
  //       };
  //     });
  //       console.log(this.id);
  //       console.log(data);
  // });


  UpdateRecord() {
    const record = {};
    record['Name'] = this.productName;
    record['Price'] = this.Price;
    record['Quantity'] = this.quantity;
    record['description'] = this.description;
    this.crudService.update_Products(this.id, record);
  }
  }

