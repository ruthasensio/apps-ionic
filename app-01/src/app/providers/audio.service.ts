import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})

export class AudioService {

  constructor(public nativeAudio: NativeAudio) { }


  playSound() {
    this.nativeAudio.preloadSimple('uniqueId1', '../assets/sounds/click.mp3');
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  }


}

