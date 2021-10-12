import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotizaService {

  private url: string = 'https://kcconsultingbusiness.com/php_email_kc/'
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  enviarEmail(body){
    return this.http.post(`${this.url}cotiza-fmc.php`,JSON.stringify(body),{responseType: 'text'});
  }
}
