import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioService } from 'src/app/providers/audio.service';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  constructor(
    public nativeAudio: NativeAudio,
    public sound: AudioService
  ) { }

  ngOnInit() {
  }


  sonido(){
    this.sound.playSound();
  }

}
