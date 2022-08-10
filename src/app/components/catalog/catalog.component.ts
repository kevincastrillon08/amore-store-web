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
    ]
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
