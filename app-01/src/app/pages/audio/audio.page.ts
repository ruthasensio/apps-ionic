import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioService } from 'src/app/providers/audio.service';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage {

  constructor(
    public nativeAudio: NativeAudio,
    public sound: AudioService
  ) { }

  ionViewDidLoad	() {
        this.sound.preloadSound()

  }

   sonido() {
    this.sound.playSound();
  }

}
