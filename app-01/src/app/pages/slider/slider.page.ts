import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  /* https://github.com/nolimits4web/Swiper/blob/master/demos/180-nested.html */

  @ViewChild('slider') slider: IonSlides;

  slideActiva: number; 

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    direction: 'horizontal',
    grabCursor: true
  };

  slideOptsV = {
    initialSlide: 1,
    speed: 400,
    direction: 'vertical',
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

  manejarSlider($event) {
    this.slider.getActiveIndex().then(index => {
      this.slideActiva = index
      this.cambiarSlider();
      return this.slideActiva
    });
  }

  cambiarSlider () {
    if(this.slideActiva === 2 ) {
      console.log("ocultar slide") 
       }
  }

  
 manejarSliderV($event) {
    this.slider.getActiveIndex().then(index => {
      this.slideActiva = index
      return this.slideActiva
    });
  }




  /* revisar en que slider estamos */


}
