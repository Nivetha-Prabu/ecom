import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PreviewProductComponent } from './preview-product/preview-product.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user', component: UserComponent },
  {path: 'admin', component: AdminComponent,
   children: [{path: 'addProduct', component: AddProductComponent },
   {path: 'editProduct', component: EditProductComponent },
  {path: 'previewProduct', component: PreviewProductComponent }
  ]},
  {path: 'listView', component: ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
