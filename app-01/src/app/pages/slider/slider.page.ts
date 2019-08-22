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
  slideVisible: boolean = true;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    direction: 'horizontal'
  };

  slideOptsV = {
    initialSlide: 0,
    speed: 400,
    direction: 'vertical'
  };

  constructor() { }

  ngOnInit() {
  }


  /* revisar en que slider estamos desde el slider H */
  manejarSlider() {
    this.slider.getActiveIndex().then(index => {
      this.slideActiva = index
      this.cambiarSlider();
      console.log(this.slideActiva);
      return this.slideActiva
    });
  }

  /* Cambiar de H a V */
  cambiarSlider() {
    if (this.slideActiva === 2) {
      console.log("cambio");
      this.slideVisible = false;
    }
  }


  /* revisar en que slider estamos desde el slider V */
  manejarSliderV() {
    this.slider.getActiveIndex().then(index => {
      this.slideActiva = index
      this.cambiarSliderV();
      console.log(this.slideActiva);
      return this.slideActiva
    });
  }

  /* Cambiar de V a H */
  cambiarSliderV() {
    if (this.slideActiva === 2) {
      console.log("ocultar slideV");
      this.slideVisible = true;
    }
  }


}
