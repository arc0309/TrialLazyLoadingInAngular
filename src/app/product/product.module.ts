import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputBase, MatInputModule } from '@angular/material';

const routes: Routes = [
  {path: '', component: ProductsComponent}
];
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
