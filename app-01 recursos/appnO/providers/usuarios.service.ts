import { Injectable } from '@angular/core';
import DatosModel from '../models/loc/Datos';
import { HttpClient } from '@angular/common/http';
import { Http , RequestOptions, Headers, URLSearchParams} from '@angular/http';



@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  url = "https://randomuser.me/api/?seed=fontventa"
   usuarioActivo: DatosModel;

  constructor(
    public http: Http,
    public httpCliente: HttpClient
  ) { }


  /* Promesa para recibir los contenidos de la API  */

  public async getUsuarios( page: number, results: number, maxPages: number): Promise<DatosModel[]> {
    return new Promise<DatosModel[]>((resolve, reject) => {

			let headers = new Headers();
			headers.append("Content-Type", "application/json");
	
			let options = new RequestOptions({ headers: headers});
			options.params = new URLSearchParams();
			
			options.params.set("page", page.toString());
      options.params.set("results", results.toString());
      options.params.set("maxPages", maxPages.toString());

      // lo que hacemos
      this.http.get(this.url,options).subscribe((resultado) => {
         
        let data: DatosModel[];
          data = resultado.json().results; // results es para acceder a los contenidos
          resolve(data);
        })
    })
  }


}




