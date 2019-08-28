import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { MultimediaService } from 'src/app/providers/multimedia.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {
  urlFile = '../../../assets/sounds/aladdin.mp3';


  constructor(
    public media: MultimediaService,
    public audio: NativeAudio
  ) { }



  ngAfterViewInit() {
    this.audio.preloadSimple('audiox', '../../../assets/sounds/sirenita.mp3')
      .then(() => {
        console.log("ok")
      });
  }



  ngOnInit() {
    this.audio.preloadSimple('audiox', '../../../assets/sounds/sirenita.mp3');
  }





  //Accion al pulsar el boton:
  sonido() {
    console.log('reproduciendo')
    this.audio.play('audiox');
  }

}
