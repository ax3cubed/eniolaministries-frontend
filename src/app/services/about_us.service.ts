import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class About_usService {

constructor(private http:HttpClient) { }


getAbout(){
  return this.http.get("http://localhost:8086/about-us");
}
 
}

