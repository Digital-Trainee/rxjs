import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) {}

  private apiUrl = 'https://digitaltrainee.in/angular_bd/bd_all_list/getZoomMeetingLink?access_token=DT-bd-c4ca4238a0b923820dcc509a6f75849b';
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => console.log('Fetched data:', data))
    );
  }

}
