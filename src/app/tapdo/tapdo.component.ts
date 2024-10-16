import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { from, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-tapdo',
  standalone: true,
  imports: [],
  templateUrl: './tapdo.component.html',
  styleUrl: './tapdo.component.scss'
})
export class TapdoComponent implements OnInit {

  constructor(private api:ApiserviceService){
    // this.api.getData().subscribe((Res:any)=>{
    //   console.log(Res);

    // })
    this.api.getData().subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log('complete');

      }
    })
  }
  User:any = [ 'anup','abcd','pqrs','xyz','salman','suhas','tar','bhaje'];

  ngOnInit(): void {
    from(this.User).pipe(tap(res=>{
        console.log('Before Change '+res)
      }),
      map(res=> 'Hello '+res),
      tap(res=>{
        console.log( 'After '+res )
      }),
      toArray()
    ).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
