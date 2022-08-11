import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/product';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList: Product[] = [];
  subtotal: number = 0;
  faTrashCan = faTrashCan;

  constructor() {
    this.productList = [
      {
        id: 1,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://www.clarin.com/img/2017/04/24/SkYzApi0g_340x340.jpg",
        price: 10000
      }, {
        id: 2,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://ae01.alicdn.com/kf/Hf253ac6b326142109db4821dc4bd769ck/Ropa-interior-Sexy-de-encaje-para-mujer-lencer-a-con-parte-trasera-en-T-de-encaje.jpg_Q90.jpg_.webp",
        price: 20000
      }, {
        id: 3,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://ae01.alicdn.com/kf/H40d1742e89854049beec102f1ff2e4b6u/3-uds-bragas-ropa-interior-bragas-Sexy-lencer-a-Tanga-para-mujer-espalda-en-T-Tanga.jpg",
        price: 20000
      }, {
        id: 4,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://i.blogs.es/c14411/conjunto-lenceria-roja-ano-nuevo/375_375.jpeg",
        price: 20000
      }, {
        id: 5,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://ae01.alicdn.com/kf/H6d4c4eaf0c90467dac4d26c71103dac6z/Conjunto-de-ropa-interior-de-mujer-de-talla-grande-Sexy-encaje-sost-n-con-cuello-de.jpg_Q90.jpg_.webp",
        price: 20000
      }, {
        id: 6,
        name: "Lenceria",
        description: "Lenceria talla variada",
        image: "https://ae01.alicdn.com/kf/Hcdc333e4cfa14727a3bf03ed8f786c867.jpg_q50.jpg",
        price: 20000
      }
    ];

    this.updateSubtotal();
  }

  ngOnInit(): void {
  }

  delete(product: Product): void {
    for (let i = 0; i < this.productList.length; i++) {
      const element = this.productList[i];
      if (element.id == product.id) {
        this.productList.splice(i, 1);
        this.updateSubtotal();
      }

    }
  }

  updateSubtotal() {
    this.subtotal = 0;
    this.productList.forEach(product => {
      this.subtotal = product.price + this.subtotal;
    });
  }

}
