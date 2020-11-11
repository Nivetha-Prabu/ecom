import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ListViewComponent } from '../list-view/list-view.component';
import { CrudService } from '../services/curd.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  amount: any;
  quantity: any;
  description: any;
  listView: any;
  navView: boolean;
  products: any;
  pid: any;
  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit() {
    this.listView = false;
    this.navView = false;
    this.crudService.read_Products().subscribe(data => {
      this.products = data.map(e => {
        this.pid = e.payload.doc.id;
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Price: e.payload.doc.data()['Price'],
          Quantity: e.payload.doc.data()['Quantity'],
          Description: e.payload.doc.data()['description'],
        };
      });
      console.log(this.products);
    });
  }
  addProduct() {
    this.listView = true;
    // this.router.navigateByUrl('addProduct');
  }
  editProduct(e) {
    this.navView = true;
    this.listView = undefined;
    this.pid = e;
    // this.router.navigateByUrl('editProduct');
  }
  previewProduct(e) {
    this.listView = true;
    console.log(e);
    // this.router.navigateByUrl('previewProduct');
  }
  adminList() {
    this.listView = true;
    // this.router.navigateByUrl('listView');
  }
}

