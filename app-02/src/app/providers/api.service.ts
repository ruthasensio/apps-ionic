import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import UsuariosModel from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url = "https://reqres.in/api/users/"

  constructor(
    public http: Http,
    public httpCliente: HttpClient
  ) { }


  //PEDIMOS LOS DATOS SEGUN LOS PARAMETROS 
  public async pedirUsuarios(page: number, results: number): Promise<UsuariosModel[]> {
    return new Promise<UsuariosModel[]>((resolve, reject) => {

      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let options = new RequestOptions({headers: headers });
      options.params = new URLSearchParams();
      options.params.set("page", page.toString());
      options.params.set("per_page", results.toString());

      this.http.get(this.url, options).subscribe((res) => {
          let listaUsuarios: UsuariosModel[];
          listaUsuarios = res.json().data;   
        })
    })
  }


}
