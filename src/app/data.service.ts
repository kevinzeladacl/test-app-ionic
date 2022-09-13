import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



let apiUrl = "https://dev.getgoapp.com/api/v1/"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,) {}

  testAPI() {
    let token = "b5fe86c599a8a7038ba8d9b923d1cf244aa5651b";
    let data = {
      "pk": 2,
      "user": 6,
      "is_active": false,
      "driver_license_front": null,
      "driver_license_back": null,
      "indenfitication_front": null,
      "indenfitication_back": null,
      "residence_certificate": null,
      "background_certificate": null,
      "padron": null,
      "circulation_permit_front": null,
      "technical_review": null,
      "photo_vehicle_1": null,
      "photo_vehicle_2": null,
      "color": "",
      "serial": "",
      "brand": "",
      "model": "tesla"
    }
    

    return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    return this.http.post(apiUrl+'user-record/'+5,data,{headers: headers})
    .subscribe(res => {
            resolve(res);
    }, (err) => {
            reject(err);
    });
    
  });
}

}
