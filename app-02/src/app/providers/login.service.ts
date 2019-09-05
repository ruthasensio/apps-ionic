import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import LoginModel from 'src/app/models/login';


@Injectable({
	providedIn: 'root'
})
export class LoginService {

	url = 'https://kitsu.io/api/oauth/token'


	datosLogin = new LoginModel('password', 'info@arkadya.es', 'anime2019', 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd', '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151');


	constructor(public httpClient: HttpClient) { }

	public async login(): Promise<any> {
		return new Promise<any>((resolve, reject) => {

			const options = {
				headers: new HttpHeaders().append("Content-Type", "application/vnd.api+json")
					.append("Accept", "application/vnd.api+json"),
			}
			
			const body = new HttpParams()
			.append('grant_type', 'password')
			.append('username', 'info@arkadya.es')
			.append('password', 'anime2019')
			.append('client_id', 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd')
			.append('client_secret', '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151');

			this.httpClient.post(this.url, body, options).subscribe(res => {
				console.log('punto1')
				resolve(res);
				reject("error al hacer el POST");
			})

		})
	}



/* 
					const headers = {
						'Authorization': 'Basic ' + btoa('devglan-client:$2a$04$e/c1/RfsWuThaWFCrcCuJeoyvwCV0URN/6Pn9ZFlrtIWaU/vj/BfG'),
						'Content-type': 'application/x-www-form-urlencoded'
					}

				const body = new HttpParams()
				.set('username', username)
				.set('password', password)
				.set('grant_type', 'password');

				this.http.post('http://localhost:8080/' + 'oauth/token', body, {headers})
				.subscribe(data => this.setToken(data),
				err => alert('invalid Creadtilas'));

				}

 */



}
