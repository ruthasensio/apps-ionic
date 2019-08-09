import { Injectable } from '@angular/core';
import PostModel from '../models/Post';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarusuarioService {
  url = "https://reqres.in/api/users/"

	constructor(
		public http: Http,
		public httpCliente: HttpClient
	) { }


	/* Promesa para enivar las modificaciones a la API */
	public async modUsuario(usuarioModificado: PostModel): Promise<PostModel[]> {
		return new Promise<PostModel[]>((resolve, reject) => {

			let headers = new Headers();
			headers.append("Content-Type", "application/json");

			let options = new RequestOptions({ headers: headers });
			options.params = new URLSearchParams();

			// AQUÍ VA LO QUE HACEMOS (pasarmos el usuarioNuevo con stringyfy para que pase a formato JSON )
			this.http.put(this.url, JSON.stringify(usuarioModificado), options).subscribe(res => {
				let data = res.json();
				if (data) {
					resolve(data);
				} else {
					reject("");
				}

			})

		})
	}

  
}
