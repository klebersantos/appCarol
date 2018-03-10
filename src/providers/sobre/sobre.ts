import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';


@Injectable()
export class SobreProvider {


  api_url = environment.site_url+environment.sobre_url;

  constructor(public http: HttpClient) {
    console.log('Hello SobreProvider Provider');
  }

  getSobre() {
    return this.http.get(this.api_url);
  }

}
