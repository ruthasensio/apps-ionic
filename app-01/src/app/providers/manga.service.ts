import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import MangaModel from '../models/Manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  url= "https://kitsu.io/api/edge/manga" 


  constructor(    
    public http: Http,
    public httpCliente: HttpClient
    ) { }

    
  public async recogiendoMangas(): Promise<MangaModel[]> {
    return new Promise<MangaModel[]>((resolve, reject) => {

      // Se prepara la cabecera / header y las opciones que se añaden a los parametros de búsqueda de la URL
      let headers = new Headers();
       headers.append("Content-Type", "application/vnd.api+json");
       headers.append("Accept", "application/vnd.api+json");

      let options = new RequestOptions({ headers: headers });
      options.params = new URLSearchParams();

      // Sacamos la info
      this.http.get(this.url, options).subscribe((resultado) => {
        let datos: MangaModel[];
        datos = resultado.json().data;
        resolve(datos);
      })
    })
  }
}
