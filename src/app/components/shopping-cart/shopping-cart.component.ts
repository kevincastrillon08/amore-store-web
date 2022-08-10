import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList: Product[] = [];
  subtotal: number = 0;


  constructor() {

    this.productList = [
      {
        id: 1,
        name: "Camisa blanca",
        description: "Camisa talla L blanca",
        image: "https://suministrales.com/wp-content/uploads/2019/11/Camisas-Fil-a-Fil-y-Twill.png",
        price: 10000
      }, {
        id: 2,
        name: "Camisa verde",
        description: "Camisa talla L verde",
        image: "https://http2.mlstatic.com/D_NQ_NP_931138-MCO47646195258_092021-W.jpg",
        price: 20000
      }, {
        id: 3,
        name: "Camisa azul",
        description: "Camisa talla L verde",
        image: "https://http2.mlstatic.com/D_NQ_NP_931138-MCO47646195258_092021-W.jpg",
        price: 20000
      }, {
        id: 4,
        name: "Camisa morada",
        description: "Camisa talla L verde",
        image: "https://http2.mlstatic.com/D_NQ_NP_931138-MCO47646195258_092021-W.jpg",
        price: 20000
      }, {
        id: 5,
        name: "Camisa cafe",
        description: "Camisa talla L verde",
        image: "https://http2.mlstatic.com/D_NQ_NP_931138-MCO47646195258_092021-W.jpg",
        price: 20000
      }, {
        id: 2,
        name: "Camisa verde",
        description: "Camisa talla L verde",
        image: "https://http2.mlstatic.com/D_NQ_NP_931138-MCO47646195258_092021-W.jpg",
        price: 20000
      }
    ];

    for (let index = 0; index < this.productList.length; index++) {
      const elementProduct = this.productList[index];
      this.subtotal = elementProduct.price + this.subtotal
    }

  }

  ngOnInit(): void {
  }

}
