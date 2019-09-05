import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import AnimesModel from '../models/animes';
import PersonajesModel from '../models/personajes';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  categoriaActiva: string;
  animeActivo: AnimesModel; 

  grant_type = 'password'
  $username = '';
  $password = '';
  idCliente: 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd'
  secretCliente: '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151'

  constructor(public httpClient: HttpClient) { }

// LOGIN

/* 
public async login(): Promise<any> {
  return new Promise<any>((resolve, reject) => {
   
    let options = {
      headers: new HttpHeaders().append("Content-Type", "application/vnd.api+json")
      .append("Accept", "application/vnd.api+json"),
      params: new HttpParams()
      .set("CLIENT_ID", 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd')
      .set("CLIENT_SECRET", '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151')
    }

    this.httpClient.post('https://kitsu.io/api/oauth/', options).subscribe((res) => {
      resolve(res);
    })

  })
}
  */


  //PEDIMOS LOS DATOS PAGINADOS // ANGULAR 8 

  public async pedirAnimes(url: string, cantidad: any, inicio: any): Promise<AnimesModel[]> {
    return new Promise<AnimesModel[]>((resolve, reject) => {

      let cantidadS = cantidad.toString();
      let inicioS = inicio.toString();

      url = url + '?page[limit]=' + cantidad + '&page[offset]=' + inicio
      let options = {
        headers: new HttpHeaders().append("Content-Type", "application/json"),
        params: new HttpParams().set("cantidad", cantidadS).set("inicio", inicioS)
      }

      this.httpClient.get(url, options).subscribe((res) => {
        let listaUsuarios: AnimesModel[];
        listaUsuarios = res['data'];
        resolve(listaUsuarios);
      })

    })
  }

  //PEDIMOS LOS DATOS PAGINADOS DE CADA CATEGORIA // ANGULAR 8 

  public async pedirAnimesCat(url: string, cantidad: any, inicio: any, categoria: string): Promise<AnimesModel[]> {
    return new Promise<AnimesModel[]>((resolve, reject) => {

      let cantidadS = cantidad.toString();
      let inicioS = inicio.toString(); 

      url = url + '?page[limit]=' + cantidad + '&page[offset]=' + inicio + '&filter[categories]=' + categoria
      console.log(url)
      let options = {
        headers: new HttpHeaders().append("Content-Type", "application/json"),
        params: new HttpParams().set("cantidad", cantidadS).set("inicio", inicioS).set("categoria", categoria)
      }

      this.httpClient.get(url, options).subscribe((res) => {
        let listaUsuarios: AnimesModel[];
        listaUsuarios = res['data'];
        resolve(listaUsuarios);
      })

    })
  }

  //PEDIMOS EL TOTAL DE PERSONAJES DE LA API // ANGULAR 8   
  public async total(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.get(url).subscribe((res) => {
        resolve(res);
      })
    })
  }




  //PEDIMOS PERSONAJES ALEATORIOS // ANGULAR 8 

  public async pedirPersonajes(url: string, cantidad, inicio): Promise<PersonajesModel[]> {
    return new Promise<PersonajesModel[]>((resolve, reject) => {

      let cantidadS: string = cantidad;
      let inicioS: string = inicio;
      url = url + '?page[limit]=' + cantidad + '&page[offset]=' + inicio;

      let options = {
        headers: new HttpHeaders().append("Content-Type", "application/json"),
        params: new HttpParams().set("cantidad", cantidadS)
          .set("inicio", inicioS)
      }

      this.httpClient.get(url, options).subscribe((res) => {
        let listaPersonajes: PersonajesModel[];
        listaPersonajes = res['data'];

        /*  Quitamos los <br> del array
       listaPersonajes.forEach(item => {
          item.attributes.descriptionOk = item.attributes.description.replace('<br>', '');
          console.log(item.attributes.description.replace("<br>", ''));
         
        }); */
        resolve(listaPersonajes);
      });

    });


  }
}
