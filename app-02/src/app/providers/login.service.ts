import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import LoginModel from 'src/app/models/login';


@Injectable({
	providedIn: 'root'
})
export class LoginService {

	url = 'https://kitsu.io/api/oauth/token'
	datosLogin: LoginModel;

	constructor(public httpClient: HttpClient) { }

	public async login(usern:string, passw:string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
/* 			let username: string = usern;
			let password: string =  passw; */

			const options = {
				headers: new HttpHeaders().append("Content-Type", "application/vnd.api+json")
					.append("Accept", "application/vnd.api+json")
							}
 			this.datosLogin = new LoginModel('password', usern, passw, 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd', '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151'); 
			/* this.datosLogin = new LoginModel('password', 'info@arkadya.es', 'anime2019', 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd', '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151');  */

			this.httpClient.post(this.url, this.datosLogin, options).subscribe(res => {
				resolve(res);
				reject("error al hacer el POST");
			})

		})
	}



}
