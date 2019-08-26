import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  visitado: boolean;
  constructor() { }

  /* guardar datos en el localStorage */
  saveStorage(primerAcceso: any, valor: any) {
    localStorage.setItem(primerAcceso, valor);
  }

  /* revisar el localStorage */
  revisarStorage() {
    let visitado = localStorage.getItem('primerAcceso');
    if (visitado) {
      console.log(visitado);
    } else {
      console.log('no se ha visitado aun');

    }
    return visitado
  }

}

