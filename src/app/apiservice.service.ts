import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http:HttpClient) {}
  suhas = new Subject<string>()
  obsersuhas = this.suhas.asObservable();
  show = new Subject<any>()

  nameS = new BehaviorSubject<any>('Borkar')
  suhasb= this.nameS.asObservable();

  asyncSu = new AsyncSubject(); // async subject has stored last value on observbel stream // // when async can done his completion after that he not emit new value
  asyncSuObser = this.asyncSu.asObservable();
  
  showsuhas()
  {
    this.nameS.next('show');
  }

  hidesuhas()
  {
    this.nameS.next('suhas')
  }

  showsuhas2()
  {
    this.show.next('show');
  }

  hideshow()
  {
    this.show.next('');
  }
  private apiUrl = 'https://digitaltrainee.in/angular_bd/bd_all_list/getZoomMeetingLink?access_token=DT-bd-c4ca4238a0b923820dcc509a6f75849b';
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => console.log('Fetched data:', data))
    );
  }


  addNewData =  new ReplaySubject<any>(4)
  obseraddnewdata = this.addNewData.asObservable();

}
