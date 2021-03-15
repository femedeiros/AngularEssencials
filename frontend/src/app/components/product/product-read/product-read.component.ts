import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadDataSource } from './product-read-datasource';
//import { ProductRead2DataSource, ProductRead2Item } from './product-read2-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: Product[];
  products: Product[]

  constructor(private productService: ProductService) { }

  displayedColumns = ['id', 'name'];
  ngOnInit(): void {

    this.productService.read().subscribe(products => {
      this.products = products;
      this.dataSource = products;
      console.log(this.dataSource, 'aqui');
    })
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
