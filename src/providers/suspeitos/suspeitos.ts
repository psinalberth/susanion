import { Injectable } from '@angular/core';
import suspeitos from './suspeitos-mock';
import 'rxjs/add/operator/map';

/*
  Generated class for the SuspeitosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SuspeitosProvider {

  findAll() {
  	return Promise.resolve(suspeitos);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(suspeitos.filter((suspeito: any) =>
        (suspeito.nome +  ' ' +suspeito.apelido +  ' ' + suspeito.identificacao).toUpperCase().indexOf(key) > -1));
  }

}
