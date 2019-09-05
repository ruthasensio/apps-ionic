import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-detalle-animes',
  templateUrl: './detalle-animes.page.html',
  styleUrls: ['./detalle-animes.page.scss'],
})
export class DetalleAnimesPage implements OnInit {

  animeActivo = this.api.animeActivo

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}
