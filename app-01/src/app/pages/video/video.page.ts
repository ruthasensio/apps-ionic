import { Component, OnInit } from '@angular/core';
import { MultimediaService } from 'src/app/providers/multimedia.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  videoFile = '../../../assets/videos/ionic-video.mp4';

  constructor( public media: MultimediaService)  { }

  ngOnInit() {

  }

  verVideo() {

  }


}
