import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})





export class  CarouselComponent implements OnInit  {
 
 
 images =['assets/media/immagine1.jpg', 'assets/media/immagine2.jpg','assets/media/immagine3.jpg']

 constructor() { }

  ngOnInit(): void {
  }

}