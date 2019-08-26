import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    direction: 'horizontal'
  };

  constructor( 
    private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  
}
