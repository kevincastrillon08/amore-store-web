import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { faArrowRightToBracket, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  
  faArrowRightToBracket = faArrowRightToBracket;
  faCartPlus = faCartPlus;

  productList: Product[] = [];
  product: any;

  closeResult = '';

  constructor(private modalService: NgbModal) { 
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
  }

  ngOnInit(): void {
  }
 
  openModal(content: any, product: Product){
    this.product = product;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
