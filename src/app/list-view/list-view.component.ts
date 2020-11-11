import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  amount: any;
  quantity: any;
  description: any;
  listView: boolean;
  navView: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.amount = 100;
    this.quantity = 5;
    this.description = 'Mobile descriptions';
    this.listView = false;
    this.navView = false;
  }
  addProduct() {
    this.listView = true;
    this.router.navigateByUrl('addProduct');
  }
  editProduct() {
    this.listView = true;
    this.router.navigateByUrl('editProduct');
  }
  previewProduct() {
    this.listView = true;
    this.router.navigateByUrl('previewProduct');
  }
  adminList() {
    this.listView = true;
    this.navView = true;
    this.router.navigateByUrl('listView');
  }
}
