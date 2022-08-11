import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  images = [
    "https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_400,dpr_3.0,c_scale,c_scale/assets/1/7/Visiture/different-types-of-underwear-for-women-ultimate-guide-1920x1000-sp.jpg",
    "https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_400,dpr_3.0,c_scale,c_scale/assets/1/7/Visiture/white%20thong%20panties%20on%20model%201920x1000-3.jpg",
    "https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_400,dpr_3.0,c_scale,c_scale/assets/1/7/Visiture/white%20thong%20panties%20on%20model%201920x1000.jpg",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
