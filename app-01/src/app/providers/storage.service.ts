import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public visitado: string;
  constructor() { }

  /* guardar datos en el localStorage */
  saveStorage(primerAcceso: any, valor: any) {
    localStorage.setItem(primerAcceso, valor);
  }

  /* revisar el localStorage */
  revisarStorage() {
    let visitado = localStorage.getItem('primerAcceso');

    if (visitado == 'true') {
      return true
    } else {      
       return false
    }
  }

}

