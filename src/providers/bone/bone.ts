import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';


@Injectable()
export class BoneProvider {

  api_url = environment.site_url+environment.bone_url;
  
  constructor(public http: HttpClient) {
    console.log('Hello BoneProvider Provider');
  }

  getBone() {
    return this.http.get(this.api_url);
  }
}
