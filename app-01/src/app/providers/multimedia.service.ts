import { Injectable } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  videoFile = '../../../assets/videos/ionic-video.mp4';
  audioFile = '../../../assets/sounds/sirenita.mp3'; 
  /* audioFile = 'https://www.elongsound.com/images/mp3/megafoniadelmetrodeparis01.mp3'; */
  constructor(
    private platform: Platform, 
    public video: VideoPlayer,
    public nativeAudio: NativeAudio
  ) { }


  preload(): void {

  if(this.platform.is('cordova')){
      this.nativeAudio.preloadSimple('audio', '../../assets/sounds/sirenita.mp3');
    } else {
      this.nativeAudio.preloadSimple('audio', '../../assets/sounds/sirenita.mp3');
      console.log('error en el servicio de audio')
    } 
  }

  play() {
    this.nativeAudio.play('audio').then(
      () => console.log('bien')
    );
  }

  cargarVideo() {
    console.log('ver video');
    this.video.play(this.videoFile).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}
