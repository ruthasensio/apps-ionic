import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import LoginModel, { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://kitsu.io/api/oauth/token'


  

datos: LoginModel;
datos = new LoginModel ('password','Arkadya','Anime-2019'); 
 
 

  constructor( public httpClient: HttpClient ) { }

	public async login(): Promise<any> {
		return new Promise<any>((resolve, reject) => {

			let headers = new Headers();
			headers.append("Content-Type", "application/json");      

      this.httpClient.post(this.url, JSON.stringify(this.datosLogin)).subscribe(res => {
       let datos = res;
       resolve(datos);
		   reject("error al hacer el post");
			})

		})
	}



}
