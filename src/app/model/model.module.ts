import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';


@NgModule({
  providers:[ProductRepository, StaticDataSource],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
