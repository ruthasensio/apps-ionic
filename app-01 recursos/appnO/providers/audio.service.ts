import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})

export class AudioService {

  constructor(public nativeAudio: NativeAudio) { }


  preloadSound() {
      this.nativeAudio.preloadSimple('uniqueId1', '../assets/sounds/aladdin.mp3');
  }

  playSound() {
/*     this.nativeAudio.play('uniqueId1').then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
 */
    this.nativeAudio.play('uniqueId1', () => 
    console.log('uniqueId1 is done playing'));
  }


}

