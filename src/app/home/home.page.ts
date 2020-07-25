import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() { }


  firstProduct;
  currentProduct;
  nextProduct;
  lastProduct;

  productList = [
    {
      'id': '1',
      'img': '../../assets/main/man.png',
      'name': 'Peter Adamaic',
      'description': 'Unisex high neck black coat suitable for all accessions and custom design.',
      'color': '#E6E6E6',
      'secColor': '#000',
      'lightColor':'#FFFFFF',
      'bgColor': '#1A1A1A',
      'price': 'AED 599',
      'sizeS': true,
      'sizeM': true,
      'sizeL': true,
      'color1': '#7A822C',
      'color2': '#150BD1',
    },
    {
      'id': '2',
      'img': '../../assets/main/woman.png',
      'name': 'Rosie Kanena',
      'description': 'Unisex high neck black coat suitable for all accessions and custom design.',
      'color': '#401702',
      'secColor': '#401702',
      'lightColor':'#FFFFFF',
      'bgColor': '#FFFFFF',
      'price': 'AED 650',
      'sizeS': true,
      'sizeM': true,
      'sizeL': false,
      'color1': '#7A822C',
      'color2': '#150BD1',
    }
  ]

  ngOnInit(): void {
    this.firstProduct = this.productList[0];
    this.currentProduct = this.firstProduct;
    this.nextProduct = this.productList[this.productList.indexOf(this.currentProduct) + 1];
    this.lastProduct = this.productList[this.productList.length - 1];
  }

  gotoAndShowItem(product) {
    this.currentProduct = this.productList[this.productList.indexOf(product)];
    // if last product
    if (this.currentProduct.id == this.lastProduct.id) {
      this.nextProduct = this.firstProduct;
    }
    else {
      this.nextProduct = this.productList[this.productList.indexOf(this.currentProduct) + 1];
    }
  }


}
