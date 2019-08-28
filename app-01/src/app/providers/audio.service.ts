import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})

export class AudioService {
  uniqueId1 = '../../../assets/sounds/aladdin.mp3';
  constructor(public nativeAudio: NativeAudio) { }


  preloadSound(urlFile) {
      this.nativeAudio.preloadSimple('uniqueId1', urlFile);
  }

  playSound() {
/*     this.nativeAudio.play('uniqueId1').then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
 */
    this.nativeAudio.play(this.uniqueId1, () => 
    console.log('uniqueId1 is done playing'));
  }


}

