import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable()
export class CarteirasProvider {

  api_url = environment.site_url+environment.carteira_url;
  
  constructor(public http: HttpClient) {
    console.log('Hello CarteirasProvider Provider');
  }

  getCarteiras() {
    return this.http.get(this.api_url);
  }
  


}
