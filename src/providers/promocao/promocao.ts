import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable()
export class PromocaoProvider {


  api_url = environment.site_url+environment.promocao_url;

  constructor(public http: HttpClient) {
    console.log('Hello PromocaoProvider Provider');
  }

  getPromocao() {
    return this.http.get(this.api_url);
  }

}


  



