import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import PostModel from '../models/Post';
import TotalModel from '../models/Total';


@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  url = "https://reqres.in/api/users/" 
   /*url= "https://kitsu.io/api/edge/manga" */
  postActivo: PostModel;
  listaUsuarios: PostModel[];

  constructor(
    public http: Http,
    public httpCliente: HttpClient
  ) { }

  public async recogiendoPost(page: number, results: number): Promise<PostModel[]> {
    return new Promise<PostModel[]>((resolve, reject) => {

      // Se prepara la cabecera / header y las opciones que se añaden a los parametros de búsqueda de la URL
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let options = new RequestOptions({ headers: headers });
      options.params = new URLSearchParams();
      options.params.set("page", page.toString());
      options.params.set("per_page", results.toString());

      // Sacamos la info
      this.http.get(this.url, options).subscribe((resultado) => {
        let datos: PostModel[];
        datos = resultado.json().data;
        resolve(datos);
      })
    })
  }


  public totalPost(): Promise<TotalModel[]> {
    return new Promise<TotalModel[]>((resolve, reject) => {

       this.http.get(this.url).subscribe((resul) => {
        let total: TotalModel[];
        total = resul.json().total;
        resolve(total);
      })
    })
  }



}