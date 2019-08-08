import { Injectable, ɵConsole } from '@angular/core';
import PostModel from '../models/Post';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class EliminarusuarioService {
  url = "https://reqres.in/api/users/"

	constructor(
		public http: Http,
		public httpCliente: HttpClient
  ) { }
  


  public async eliminarUsuarios(idEliminar: number): Promise<PostModel[]> {
		return new Promise<PostModel[]>((resolve, reject) => {
			let headers = new Headers();
			headers.append("Content-Type", "application/json");

			let options = new RequestOptions({ headers: headers });
      options.params = new URLSearchParams();
      this.url = this.url + idEliminar;
      this.http.delete(this.url).subscribe((resultado) => {
        let data: any;
        data = resultado;
        resolve(data); 
        reject();
      })
		})
  }
  

  }