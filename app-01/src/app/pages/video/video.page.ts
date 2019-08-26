import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  videoFile =  '../../../assets/videos/ionic-video.mp4';
  
  constructor( private videoPlayer: VideoPlayer ) { }

  ngOnInit() {
    this.videoPlayer.play('this.videoFile').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });

  }

verVideo() {
  this.videoPlayer.play(this.videoFile).then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
}


}
