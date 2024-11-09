import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  standalone: true,
  imports: [],
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.scss'
})
export class SwitchmapComponent implements OnInit{
  getdata(user:any)
  {
    return of(`Data Of ${user}`)
  }

  users = from(['abcd','ncd','sdasd','sead','usk']).pipe(delay(2000));
  ngOnInit(): void {

    // Example 01 :- Map
    this.users.pipe(map(res => this.getdata(res))).subscribe((res:any)=>{
      res.subscribe((Res:any)=>{
        // console.log(Res);
      })
    })

    // Example 02 :- Map + SwitchAll
    this.users.pipe(map(res => this.getdata(res)),switchAll()).subscribe((res:any)=>{
        // console.log(res);
    })

    // Example 03 :- SwitchMap
    this.users.pipe(switchMap(res => this.getdata(res))).subscribe((res:any)=>{
        console.log(res);
    })


  }
}

