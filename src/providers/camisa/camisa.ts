import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';


@Injectable()
export class CamisaProvider {

  api_url = environment.site_url+environment.camisa_url;
  
  constructor(public http: HttpClient) {
    console.log('Hello CamisaProvider Provider');
  }

  getCamisa() {
    return this.http.get(this.api_url);
  }
}


